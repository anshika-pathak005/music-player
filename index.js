let progress = document.querySelector("#progress");
let song = document.getElementById("song");
let controlIcon = document.querySelector("#control_icon");
let songName = document.querySelector(".song_name");
let artistName = document.querySelector(".artist_name");
let nextBtn = document.querySelector(".bxs-chevrons-right");
let prevBtn = document.querySelector(".bxs-chevrons-left");
let songImage = document.querySelector(".song_img img"); // Select the song image

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// List of songs
let songs = [
  {
    name: "Dhadak",
    artist: "Ajay Gogavale, Shreya Ghoshal",
    src: "media/Dhadak.mp3",
    img: "images/1.jpeg",
  },
  {
    name: "Faniyaar",
    artist: "Jyotica Tangri",
    src: "media/Faniyaar.mp3",
    img: "images/2.jpeg",
  },
  {
    name: "Finding You",
    artist: "Kushagra",
    src: "media/Finding You.mp3",
    img: "images/3.jpeg",
  },
  {
    name: "Itna Khoobsurat",
    artist: "Amitabh Bhattacharya, Sachin–Jigar, and Vishal Mishra",
    src: "media/Itna Khoobsurat.mp3",
    img: "images/4.jpeg",
  },
  {
    name: "Mere Rashke Qamar",
    artist: "Nusrat Fateh Ali Khan, Rahat Fateh Ali Khan",
    src: "media/Mere Rashke Qamar.mp3",
    img: "images/5.jpeg",
  },
  {
    name: "Murli Ki Taanon Si",
    artist: "Himesh Reshammiya and Shaan",
    src: "media/Murli ki taano si.mp3",
    img: "images/6.jpeg",
  },
  {
    name: "Nit Khair Manga",
    artist: "Rahat Fateh Ali Khan",
    src: "media/Nit Khair Manga.mp3",
    img: "images/7.jpeg",
  },
  {
    name: "Paro_x_Maand",
    artist: "Mashup",
    src: "media/Paro_x_Maand.mp3",
    img: "images/8.jpeg",
  },
  {
    name: "Rangrez",
    artist: "Shankar Mahadevan",
    src: "media/Rangrez.mp3",
    img: "images/9.jpeg",
  },
  {
    name: "Sahiba",
    artist: "Aditya Rikhari",
    src: "media/Sahiba.mp3",
    img: "images/10.jpeg",
  },
  {
    name: "Sapphire",
    artist: "Ed Sheeran, Arijit Singh",
    src: "media/Sapphire.mp3",
    img: "images/11.jpeg",
  },
  {
    name: "Tere Nainon Mein",
    artist: "The Bilz and Kashif",
    src: "media/Tere Nainon Mein.mp3",
    img: "images/12.jpeg",
  },
  {
    name: "Teri Yaari",
    artist: "Millind Gaba, Aparshakti Khurana, King Kaazi",
    src: "media/Teri Yaari.mp3",
    img: "images/13.jpeg",
  },
  {
    name: "Tu hawa majn jmeen",
    artist: "Aabid Aly",
    src: "media/tu hawa majn jmeen.mp3",
    img: "images/14.jpeg",
  },
  {
    name: "Vaar Diya",
    artist: "Hiten",
    src: "media/Vaar Diya.mp3",
    img: "images/15.jpeg",
  },
];

let currentSongIndex = 0;

// Load the current song
function loadSong(index) {
  console.log(index);
  let currentSong = songs[index];
  song.src = currentSong.src;
  songName.textContent = currentSong.name;
  artistName.textContent = currentSong.artist;
  songImage.src = currentSong.img; // Update the song image
  progress.value = 0;
  song.load(); // Load the new song
}

// Play/Pause function
function playPause() {
  if (controlIcon.classList.contains("bx-pause")) {
    song.pause();
    controlIcon.classList.remove("bx-pause");
    controlIcon.classList.add("bx-play");
  } else {
    song.play();
    controlIcon.classList.add("bx-pause");
    controlIcon.classList.remove("bx-play");
  }
}

// Update progress bar
song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

// Reset progress and play button when song ends
song.onended = function () {
  progress.value = 0;
  controlIcon.classList.remove("bx-pause");
  controlIcon.classList.add("bx-play");

  // Reset the slider's background color
  // progress.style.background = `linear-gradient(to right, #111 0%, rgb(73, 73, 73) 100%)`;
  progress.style.background = `rgb(73, 73, 73)`;
};

// Handle progress bar change
progress.onchange = function () {
  song.currentTime = progress.value;
  song.play();
  controlIcon.classList.add("bx-pause");
  controlIcon.classList.remove("bx-play");
};
// Next song
nextBtn.onclick = function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song
  loadSong(currentSongIndex);
  song.play();
  controlIcon.classList.add("bx-pause");
  controlIcon.classList.remove("bx-play");
};

// Previous song
prevBtn.onclick = function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop back to the last song
  loadSong(currentSongIndex);
  song.play();
  controlIcon.classList.add("bx-pause");
  controlIcon.classList.remove("bx-play");
};

// Load the first song initially
loadSong(currentSongIndex);

// // Update progress bar background dynamically
// song.ontimeupdate = function () {
//     progress.value = song.currentTime;

//     // Calculate the percentage of song completed
//     let percentage = (song.currentTime / song.duration) * 100;

//     // Update the background style of the progress slider
//     progress.style.background = `linear-gradient(to right, #111 ${percentage}%, rgb(73, 73, 73) ${percentage}%)`;
// };
// Update progress bar background dynamically
song.ontimeupdate = function () {
  progress.value = song.currentTime;

  // Calculate the percentage of song completed
  let percentage = (progress.value / progress.max) * 100;

  // Update the background style of the progress slider
  progress.style.background = `linear-gradient(to right, #fff ${percentage}%, rgb(73, 73, 73) ${percentage}%)`;
};

//menu button
const menuBtn = document.querySelector(".bx-menu");
const songPanel = document.querySelector(".song-list-panel");

menuBtn.addEventListener("click", () => {
  songPanel.classList.toggle("active");
});

const closeBtn = document.querySelector(".song-list-panel .close-btn");

closeBtn.addEventListener("click", () => {
  songPanel.classList.remove("active");
});

//songs for slider
let songList = document.getElementById("songList");

songs.forEach((songItem, index) => {
  let li = document.createElement("li");
  li.textContent = songItem.name; // show real song name
  li.style.cursor = "pointer"; // optional: show pointer on hover

  li.addEventListener("click", () => {
    // Load the clicked song
    loadSong(index);

    // Play immediately
    song.play();

    // Update play/pause icon
    controlIcon.classList.add("bx-pause");
    controlIcon.classList.remove("bx-play");

    // Optionally close the slider
    document.querySelector(".song-list-panel").classList.remove("open");
  });

  songList.appendChild(li);
});
