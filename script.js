const audio = document.createElement('audio');
let playlist = [];
let songIndex = 0;

// DOM Elements
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const albumCoverEl = document.querySelector('.album-cover img');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeControl = document.getElementById('volume');

// --- Fetch songs from iTunes API ---
async function fetchSongs(searchTerm = 'Adele') {
  try {
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&limit=10`);
    const data = await res.json();
    playlist = data.results.map(track => ({
      title: track.trackName,
      artist: track.artistName,
      audioSrc: track.previewUrl,
      albumArt: track.artworkUrl100.replace('100x100', '300x300') // higher res
    }));
    songIndex = 0;
    loadSong(playlist[songIndex]);
  } catch (err) {
    console.error('Error fetching songs:', err);
  }
}

// --- Load song ---
function loadSong(song) {
  audio.src = song.audioSrc;
  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
  albumCoverEl.src = song.albumArt;
}

// --- Play / Pause ---
function playSong() {
  audio.play();
  playBtn.textContent = '⏸';
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = '▶️';
}

playBtn.addEventListener('click', () => {
  if (audio.paused) playSong();
  else pauseSong();
});

// --- Next / Previous ---
function nextSong() {
  songIndex = (songIndex + 1) % playlist.length;
  loadSong(playlist[songIndex]);
  playSong();
}
function prevSong() {
  songIndex = (songIndex - 1 + playlist.length) % playlist.length;
  loadSong(playlist[songIndex]);
  playSong();
}
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// --- Progress Bar ---
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // Update time
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
  const durationMinutes = Math.floor(audio.duration / 60) || 0;
  const durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0') || '00';

  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
});

progressContainer.addEventListener('click', e => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});

// --- Volume Control ---
volumeControl.addEventListener('input', e => {
  audio.volume = e.target.value;
});

// --- Auto Next Song ---
audio.addEventListener('ended', nextSong);

// --- Initialize with default search ---
fetchSongs('Adele');
