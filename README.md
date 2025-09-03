🎵 Music Player Web App

A modern, responsive web-based music player built with HTML, CSS, and JavaScript. Users can search for songs dynamically using the iTunes API, play audio previews, control volume, and navigate tracks. The UI features glassmorphism and a hero-style design for a sleek, modern look.

🌟 Features

Dynamic Song Search: Search songs or artists using the iTunes API.

Audio Playback: Play, pause, skip forward/back, and seek tracks.

Volume Control: Adjustable volume slider.

Progress Bar: Displays current time and track duration.

Dynamic Playlist: Updates automatically based on search results.

Modern UI: Glassmorphic design with album artwork and glowing controls.

Responsive Design: Optimized for both desktop and mobile devices.

🛠 Technologies Used

HTML5 – Semantic structure and elements.

CSS3 – Styling, animations, glassmorphism, and responsive layout.

JavaScript – DOM manipulation, audio control, and API integration.

iTunes Search API – Provides dynamic music previews.

📂 Project Structure
music-player/
│── index.html        # Main HTML file
│── style.css         # CSS styling
│── script.js         # JavaScript functionality & API calls

⚙️ Setup & Usage

Clone the repository:

git clone https://github.com/Harsh5437/music-player.git


Open index.html in your browser.

Search for songs:

Enter an artist or song name in the search bar.

Click Search to fetch previews from the iTunes API.

Control playback:

Use Play/Pause, Next, and Previous buttons.

Adjust the volume slider.

Seek through the track using the progress bar.

View track info:

Song title, artist, and album artwork update dynamically.

🔗 API Integration

Uses iTunes Search API for dynamic song previews.

Example request:

https://itunes.apple.com/search?term=adele&limit=5


Each result contains a previewUrl used for audio playback.

🌐 Live Demo

Click here to view the live demo

Replace your-username with your GitHub username. The app works fully online via GitHub Pages.

✨ Future Enhancements

Full playlist management with save/load options.

Display lyrics using a lyrics API.

Theme switching: light/dark mode.

Integrate additional APIs for longer previews or streaming.

📌 Notes

Preview clips are limited to 30 seconds due to iTunes API restrictions.

Intended for educational/demo purposes only.
