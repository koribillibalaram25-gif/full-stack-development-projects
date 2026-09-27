const songs = [
{
id: 1,
name: "Shape of You",
artist: "Ed Sheeran",
genre: "Pop",
img: "https://picsum.photos/300?random=1",
source: ""
},
{
id: 2,
name: "Believer",
artist: "Imagine Dragons",
genre: "Rock",
img: "https://picsum.photos/300?random=2",
source: ""
},
{
id: 3,
name: "Lose Yourself",
artist: "Eminem",
genre: "Hip Hop",
img: "https://picsum.photos/300?random=3",
source: ""
}
];

let currentSongIndex = 0;

const songsList = document.getElementById("songs-list");
const genreFilter = document.getElementById("genre-filter");

function showSongs(filter = "all") {
songsList.innerHTML = "";

const filteredSongs =
filter === "all"
? songs
: songs.filter(song => song.genre === filter);

filteredSongs.forEach(song => {
const btn = document.createElement("button");

btn.textContent = `${song.name} - ${song.artist}`;

btn.addEventListener("click", () => {
currentSongIndex = songs.findIndex(
s => s.id === song.id
);

renderCurrentSong();
});

songsList.appendChild(btn);
});
}

genreFilter.addEventListener("change", () => {
showSongs(genreFilter.value);
});

function renderCurrentSong() {

const song = songs[currentSongIndex];

document.getElementById("song-image").src =
song.img;

document.getElementById("song-name").textContent =
song.name;

document.getElementById("song-artist").textContent =
song.artist;
}

document
.getElementById("next-btn")
.addEventListener("click", () => {

currentSongIndex++;

if (currentSongIndex >= songs.length) {
currentSongIndex = 0;
}

renderCurrentSong();
});

document
.getElementById("prev-btn")
.addEventListener("click", () => {

currentSongIndex--;

if (currentSongIndex < 0) {
currentSongIndex = songs.length - 1;
}

renderCurrentSong();
});

document
.getElementById("theme-btn")
.addEventListener("click", () => {

const body = document.body;

if (
body.getAttribute("data-theme") === "dark"
) {
body.setAttribute("data-theme", "light");
} else {
body.setAttribute("data-theme", "dark");
}
});

showSongs();
renderCurrentSong();
console.log("js is working");

// playlist code here
const playlists = [];

const playlistContainer =
document.getElementById("playlists");

const playlistSelect =
document.getElementById("playlist-select");

document
.getElementById("create-playlist-btn")
.addEventListener("click", () => {
alert("Button Clicked");
const playlistName =
document.getElementById("playlist-name").value;

if (playlistName.trim() === "") return;

const playlist = {
name: playlistName,
songs: []
};

playlists.push(playlist);
console.log(playlists);

renderPlaylists();

document
.getElementById("add-playlist-btn")
.addEventListener("click", () => {

const selectedPlaylistIndex =
playlistSelect.value;

if (selectedPlaylistIndex === "") return;

playlists[selectedPlaylistIndex].songs.push(
songs[currentSongIndex]
);

console.log(playlists);
alert("Song Added To Playlist");
});
document.getElementById("playlist-name").value = "";
});

function renderPlaylists() {
console.log("renderPlaylists called");
playlistContainer.innerHTML = "";
playlistSelect.innerHTML = "";

playlists.forEach((playlist, index) => {

const div =
document.createElement("div");

div.className = "playlist-item";

div.textContent = playlist.name;
div.addEventListener("click", () => {
renderPlaylistSongs(index);
});
playlistContainer.appendChild(div);

const option =
document.createElement("option");

option.value = index;

option.textContent = playlist.name;
console.log("Adding option:", playlist.name);
playlistSelect.appendChild(option);
console.log(playlistSelect.innerHTML);
});
}
function renderPlaylistSongs(index) {

const playlistSongsDiv =
document.getElementById("playlist-songs");

playlistSongsDiv.innerHTML = "";

playlists[index].songs.forEach(song => {

const p = document.createElement("p");

p.textContent =
song.name + " - " + song.artist;

playlistSongsDiv.appendChild(p);

});
}
document
.getElementById("add-playlist-btn")
.addEventListener("click", () => {
console.log("Add button clicked");
const selectedPlaylistIndex =
playlistSelect.value;
console.log("Selected:",selectedPlaylistIndex);
if (selectedPlaylistIndex === "") return;

playlists[selectedPlaylistIndex].songs.push(
songs[currentSongIndex]
);

alert("Song Added To Playlist");
});