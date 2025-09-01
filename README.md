# 🎵 Music Player

A responsive music player built with HTML, CSS, and JavaScript, featuring dynamic playlists, real-time progress tracking, and smooth playback controls.

(live demo link - coming soon) 

## 🔍 Overview

I built this project to learn how to manage audio playback with JavaScript and design an interactive, modern interface.

While I used a tutorial for structural guidance, all code was written independently, with additional features implemented by me, including:

- Responsive layout for all screen sizes  
- Curated playlist of favorite songs  
- UI refinements and custom controls  

## ✨ Features

- ▶️ Play/Pause toggle with animated control icon  
- ⏭ Next / Previous controls with automatic looping  
- 📊 Dynamic progress bar — updates in real-time and supports seeking  
- 📂 Slide-in playlist panel — click to play any song instantly  
- 🎵 Displays song name, artist, and cover image dynamically  
- 📱 Responsive design — works smoothly on mobile and desktop  
- 🎚 Custom-styled range slider for better interaction  
- 🔄 Automatic reset — progress and button state reset when a song ends  

## 📂 Project Structure

```
music-player/ # Repository root
│
├── images/ # Folder containing cover/poster images
├── media/ # Folder containing audio files (songs)
├── README.md # Project documentation
├── index.html # Main player layout (HTML structure)
├── index.js # Core music player logic (JavaScript)
└── style.css # Styling and responsive rules (CSS)
```

## 🚀 Installation / Usage

1. Clone or download this repository.  
2. Place your music files in the `media/` folder and update the playlist in JS if needed.  
3. Open `index.html` in any modern browser.  
4. Use the controls or open the playlist panel to select songs.  

## 📸 Screenshot
<img width="1366" height="682" alt="image" src="https://github.com/user-attachments/assets/1d51b713-f0d0-492b-ac42-bdc21c02162c" />
<img width="1366" height="676" alt="image" src="https://github.com/user-attachments/assets/f8c087a8-a4e6-467f-8008-a179a8280347" />

## 🧠 What I Learned

- Controlling HTML `<audio>` elements with JavaScript  
- Syncing the UI with audio events (`onloadedmetadata`, `ontimeupdate`, `onended`)  
- Using `clamp()`, `flex`, and `minmax` for responsive layouts  
- Building interactive playlists dynamically with JavaScript  

## 🙌 Acknowledgments

- **Inspiration:** A tutorial on how music players work  
- **Code:** Fully written by me, with added responsiveness, playlist handling, and UI refinements 
