// function to play the Music 
let songs = [
    {
        artist: 'hbdajholgfUAJDEF',
        songname: 'Pata Nahi Kis Roop'
    },

    {

        artist: 'NULL',
        songname: 'TarrokaSeher'
    }
]
var play = document.getElementById("playmusic")
var is_pause = false // no pause
var next = document.getElementById('nextmusic')
var prev=document.getElementById('previous')
let musicname = document.querySelector('h3');
let artistname=document.getElementsByClassName("artist");
var songindex=0
// console.log("nodd")


var music = document.querySelector('audio')


play.addEventListener("click", () => {
        if (is_pause == false) {
        is_pause = true
        play.classList.replace("fa-play", "fa-pause")
        console.log("pause")
        music.play();
    }
    else {
        is_pause = false
        play.classList.replace("fa-pause", "fa-play")
        console.log("Play")
        music.pause()

    }

    console.log(music)
})

function loadmusic(songs)
{
  musicname.innerHTML=songs[songindex].songname;
  artistname[0].innerHTML = songs[songindex].artist
  
}
loadmusic(songs)

next.addEventListener('click', () => {
    is_pause = true


})