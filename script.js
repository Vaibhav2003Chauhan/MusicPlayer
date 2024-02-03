var playmusic = document.getElementById("playmusic")
let playing_music = false // music is stooped initially
var music = document.querySelector("audio")
var image = document.querySelector('img')
var nextmusic = document.getElementById('next')
var previousmusic = document.getElementById("back")
let songname = document.querySelector('h3')
let artist = document.getElementsByClassName("artist")
var songnumber = -1
songslist = [{
    songname: 'TarrokaSeher',
    artist: 'Arijit Singh'
},
{
    songname: '295',
    artist: 'Sidhu Mosewala'
}, {
    songname: 'BrownRang',
    artist: 'Honey Singh'
}, {
    songname: 'AngreziBeat',
    artist: 'POP'
}]

playmusic.addEventListener("click", () => {
    if (playing_music == false) {
        playing_music = true
        playmusic.classList.replace("fa-play", "fa-pause")
        image.classList.add('rotate')
        music.play()

        console.log("played the music ")
    }
    else {
        playing_music = false
        playmusic.classList.replace("fa-pause", "fa-play")
        image.classList.remove('rotate')
        music.pause()
        console.log("pause the music ")
    }
    console.log(music)
})

function loadmusic(songslist) {
    music.src = "../assets/Music/" + songslist.songname + ".mp3"
    console.log(music.src)
    songname.textContent = songslist.songname
    artist[0].innerHTML = songslist.artist
    music.play()
}

nextmusic.addEventListener("click", () => {
    songnumber = (songnumber + 1) % songslist.length;
    loadmusic(songslist[songnumber])
}
)
previousmusic.addEventListener("click", () => {

    songnumber = (songnumber - 1 + songslist.length) % songslist.length;

    loadmusic(songslist[songnumber])
}
)