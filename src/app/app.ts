import { Component, OnInit, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SONGS, MVS, ARTIST, Song, MV } from './music.data';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private sanitizer = inject(DomSanitizer);
  
  // App data signals
  protected readonly songs = signal(SONGS);
  protected readonly safeMvs = signal<(MV & { safeUrl: SafeResourceUrl })[]>([]);
  protected readonly artist = signal(ARTIST);
  
  // Theme state
  protected readonly activeTheme = signal('caramel-latte');
  
  // Player state
  protected readonly currentSong = signal<Song | null>(null);
  protected readonly isPlaying = signal(false);
  protected readonly currentTime = signal(0);
  protected readonly duration = signal(0);
  protected readonly volume = signal(0.7);
  protected readonly isMuted = signal(false);
  
  private audio?: HTMLAudioElement;
  private isBrowser = false;
  private prevVolume = signal(0.7);

  ngOnInit() {
    // Sanitize YouTube URLs once on initialization to prevent iframe flickering
    const sanitized = MVS.map(mv => ({
      ...mv,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(mv.youtubeEmbedUrl)
    }));
    this.safeMvs.set(sanitized);

    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.audio = new Audio();
      this.audio.volume = this.volume();
      
      // Setup audio event listeners
      this.audio.addEventListener('timeupdate', () => {
        if (this.audio) {
          this.currentTime.set(this.audio.currentTime);
        }
      });
      
      this.audio.addEventListener('loadedmetadata', () => {
        if (this.audio) {
          this.duration.set(this.audio.duration);
        }
      });
      
      this.audio.addEventListener('ended', () => {
        this.nextTrack();
      });
      
      // Initialize theme from localStorage or default
      const savedTheme = localStorage.getItem('theme') || 'caramel-latte';
      this.changeTheme(savedTheme);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio.load();
    }
  }

  // Sanitizes resources for iframes
  protected getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Plays a song or toggles play/pause if the song is already current
  protected playSong(song: Song) {
    if (!this.isBrowser || !this.audio) return;
    
    if (this.currentSong()?.id === song.id) {
      this.togglePlay();
    } else {
      this.currentSong.set(song);
      this.audio.src = song.audioUrl;
      this.audio.load();
      this.audio.play()
        .then(() => this.isPlaying.set(true))
        .catch(err => console.error('Audio playback failed:', err));
    }
  }

  // Toggles play/pause state
  protected togglePlay() {
    if (!this.isBrowser || !this.audio) return;
    
    if (!this.currentSong()) {
      // Play the first song by default
      const first = this.songs()[0];
      if (first) {
        this.playSong(first);
      }
      return;
    }
    
    if (this.isPlaying()) {
      this.audio.pause();
      this.isPlaying.set(false);
    } else {
      this.audio.play()
        .then(() => this.isPlaying.set(true))
        .catch(err => console.error('Audio playback failed:', err));
    }
  }

  // Plays the next track in the list
  protected nextTrack() {
    const list = this.songs();
    const current = this.currentSong();
    if (!current) {
      if (list.length > 0) this.playSong(list[0]);
      return;
    }
    const idx = list.findIndex(s => s.id === current.id);
    const nextIdx = (idx + 1) % list.length;
    this.playSong(list[nextIdx]);
  }

  // Plays the previous track in the list
  protected prevTrack() {
    const list = this.songs();
    const current = this.currentSong();
    if (!current) {
      if (list.length > 0) this.playSong(list[list.length - 1]);
      return;
    }
    const idx = list.findIndex(s => s.id === current.id);
    const prevIdx = (idx - 1 + list.length) % list.length;
    this.playSong(list[prevIdx]);
  }

  // Seeks to a specific position in the track
  protected seek(event: Event) {
    if (!this.isBrowser || !this.audio) return;
    const input = event.target as HTMLInputElement;
    const val = parseFloat(input.value);
    this.audio.currentTime = val;
    this.currentTime.set(val);
  }

  // Adjusts volume
  protected setVolume(event: Event) {
    if (!this.isBrowser || !this.audio) return;
    const input = event.target as HTMLInputElement;
    const val = parseFloat(input.value);
    this.volume.set(val);
    this.audio.volume = val;
    if (val > 0) {
      this.isMuted.set(false);
    }
  }

  // Mutes or unmutes the audio
  protected toggleMute() {
    if (!this.isBrowser || !this.audio) return;
    if (this.isMuted()) {
      this.audio.volume = this.prevVolume();
      this.volume.set(this.prevVolume());
      this.isMuted.set(false);
    } else {
      this.prevVolume.set(this.volume());
      this.audio.volume = 0;
      this.volume.set(0);
      this.isMuted.set(true);
    }
  }

  // Switches theme
  protected changeTheme(themeName: string) {
    this.activeTheme.set(themeName);
    if (this.isBrowser) {
      localStorage.setItem('theme', themeName);
      document.documentElement.setAttribute('data-theme', themeName);
    }
  }

  // Scroll to targeted section
  protected scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    if (!this.isBrowser) return;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Formats time in seconds to MM:SS format
  protected formatTime(seconds: number): string {
    if (isNaN(seconds) || seconds === Infinity) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const minsStr = mins < 10 ? '0' + mins : mins.toString();
    const secsStr = secs < 10 ? '0' + secs : secs.toString();
    return `${minsStr}:${secsStr}`;
  }
}
