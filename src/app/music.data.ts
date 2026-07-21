export interface Song {
  id: string;
  title: string;
  genre: string;
  mood: string;
  description: string;
  coverUrl: string;
  audioUrl: string;
  youtubeUrl: string;
}

export interface MV {
  id: string;
  title: string;
  genre: string;
  description: string;
  youtubeEmbedUrl: string;
  coverUrl: string;
}

export interface Artist {
  name: string;
  profileUrl: string;
  bio: string;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
}

export const SONGS: Song[] = [
  {
    id: 'song-1',
    title: 'สาวหนองกุ้ง',
    genre: 'Pop Rock',
    mood: 'สาวหนองกุ้ง',
    description: 'บรรเลงความรักที่ไหลไปกับสายน้ำโขงยามเย็น ดนตรีป๊อปร็อกฟังสบายกับกลิ่นอายเสียงกีตาร์อบอุ่น',
    coverUrl: 'https://www.dropbox.com/scl/fi/ob8kbgoc86wv7cxtv59y2/bf78784a-df67-43b5-863d-7b0c9bc28ba3.png?rlkey=29aws1br4p3uhtkiyjfv1fve3&st=srkg8bus&raw=1',
    audioUrl: 'https://www.dropbox.com/scl/fi/uh13kraxnos659duur64a/.mp3?rlkey=v1t64qiwxvvr5crxamdxi5dd6&st=xaqqlosx&raw=1',
    youtubeUrl: 'https://youtu.be/qMkr03H99-M' // Rickroll or beautiful acoustic guitar loop
  },
  {
    id: 'song-2',
    title: 'รสหวานที่ซ่อนอยู่',
    genre: 'Thai Pop',
    mood: 'แอบชอบใครบางคน',
    description: 'เพลงที่มีจังหวะสนุกๆ เนื้อหาน่ารักๆ เกี่ยวกับการแอบชอบใครบางคน',
    coverUrl: 'https://www.dropbox.com/scl/fi/2meh7csf623mg6xay7nbb/a3db067f-6ac5-4aec-b2c4-c1ecf0b55d9e.png?rlkey=tgli23nyebi9pd0mz1972vc9o&st=uifexvrn&dl=1',
    audioUrl: 'https://www.dropbox.com/scl/fi/me2mkiy9rxa2xrf1lcyjp/.mp3?rlkey=8993sgvbk90jinpc6op2ob7wk&st=qy2tjp82&dl=1',
    youtubeUrl: 'https://youtu.be/5RLkOAjzoaE'
  },
  {
    id: 'song-3',
    title: 'อาดัมบ้านซอย ยืนคอยความรัก',
    genre: 'Pop Rock',
    mood: 'การรอใครสักคน',
    description: 'เพลงป๊อปร็อคที่บอกเล่าเรื่องราวการรอคอยใครบางคน ดนตรีฟังสบายๆ มีกลิ่นอายเสียงกีตาร์อบอุ่น',
    coverUrl: 'https://www.dropbox.com/scl/fi/kt9s9bz1aeul37hm8k34a/fabca45a-e216-43a9-b322-8c8e0c907751.png?rlkey=edrvwmohao6p9c9lng6apviyq&st=rvw1607g&dl=1',
    audioUrl: 'https://www.dropbox.com/scl/fi/iekjnejgzfts1pvxyuocb/.mp3?rlkey=bjjn2xk3ntwuwss37frcdgz24&st=58zd9t4a&dl=1',
    youtubeUrl: 'https://youtu.be/_4-2IzdLNe0?si=WTpnhGrgAuau-BhT'
  },
  {
    id: 'song-4',
    title: 'คนแพ้สองคน',
    genre: 'Pop Rock',
    mood: 'คนแพ้ในความรัก',
    description: 'เพลงป๊อปร็อคที่บอกเล่าเรื่องราวความรักของคนแพ้สองคน ดนตรีฟังสบายๆ มีกลิ่นอายเสียงกีตาร์อบอุ่น',
    coverUrl: '',
    audioUrl: 'https://www.dropbox.com/scl/fi/25t99xbx2jr2tocrkulap/.mp3?rlkey=v38ctdq746obm7htk88hhe2uk&st=ilhlc7nt&dl=1',
    youtubeUrl: ''
  },
   {
    id: 'song-5',
    title: 'ในคืนที่ดาวดับ',
    genre: 'Pop Rock',
    mood: 'คนแพ้ในความรัก',
    description: 'เพลงป๊อปร็อคที่บอกเล่าเรื่องราวความรักของคนแพ้สองคน ดนตรีฟังสบายๆ มีกลิ่นอายเสียงกีตาร์อบอุ่น',
    coverUrl: '',
    audioUrl: 'https://www.dropbox.com/scl/fi/ugx4bce1neh0p6cru7ltv/.mp3?rlkey=44n77evbsf13pgujoao2eg0j0&st=0l56g1yv&dl=1',
    youtubeUrl: ''
  }
];

export const MVS: MV[] = [
  {
    id: 'mv-1',
    title: 'สาวหนองกุ้ง (Official MV)',
    genre: 'Modern Luk Thung',
    description: 'สาวหนองกุ้ง มิวสิคเอ็มวี ที่จะทำให้คุณอบอุ่นหัวใจและอินไปกับเสียงเพลง',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/qMkr03H99-M?si=3G32__eyc_ADU4xP', // Placeholder video embed
    coverUrl: 'https://www.dropbox.com/scl/fi/ob8kbgoc86wv7cxtv59y2/bf78784a-df67-43b5-863d-7b0c9bc28ba3.png?rlkey=29aws1br4p3uhtkiyjfv1fve3&st=srkg8bus&raw=1'
  },
  {
    id: 'mv-2',
    title: 'รสหวานที่ซ่อนอยู่ (Official MV)',
    genre: 'Thai Pop',
    description: 'MV หวานๆ ที่จะทำให้คุณอบอุ่นหัวใจและอินไปกับเสียงเพลง',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/5RLkOAjzoaE?si=-iCQrat4-e5meY2h', // Placeholder video embed
    coverUrl: 'https://www.dropbox.com/scl/fi/2meh7csf623mg6xay7nbb/a3db067f-6ac5-4aec-b2c4-c1ecf0b55d9e.png?rlkey=tgli23nyebi9pd0mz1972vc9o&st=uifexvrn&dl=1'
  }
];

export const ARTIST: Artist = {
  name: 'BarBQFoot',
  profileUrl: '/images/artist.png',
  bio: 'ผมเป็นคนดนตรีอิสระที่เกิดและเติบโตริมฝั่งแม่น้ำโขง มีความฝันในการเล่าเรื่องราววิถีชีวิต ความรัก และความอบอุ่นในบ้านเกิดผ่านบทเพลงผสมผสานทั้งแนว Pop, Rock, และ HipHop หวังว่าเสียงเพลงของผมจะช่วยเติมนมและคาราเมลแสนหวานให้วันธรรมดาของคุณกลายเป็นลาเต้ที่พิเศษสุด',
  stats: [
    { label: 'ผลงานเพลง', value: '4 เพลง', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' },
    { label: 'ผู้ติดตามทั้งหมด', value: '10,250 คน', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8zm11 2a4 4 0 00-3-3.87m-4-12a4 4 0 011 7.75' },
    { label: 'ยอดเข้าชมรวม', value: '185,430 ครั้ง', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' }
  ]
};
