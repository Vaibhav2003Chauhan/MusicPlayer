// function to play the Music 
let songnames = [
    {
        'artist': '',
        'songname': 'Pata Nahi Kis Roop'
    }
]
var play = document.getElementById("playmusic")
var is_pause = false // no pause
var next=document.getElementById('nextmusic')

var music = document.querySelector('audio')


play.addEventListener("click", () => {
    // this will display the Name of song
    let songname = document.querySelector('h3')
    songname.innerHTML = 'Pata Nahi Kis Roop'

    let artist = document.querySelector('.artist')
    artist.innerHTML="vaibhav"

    // console.log(artist)
  
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

next.addEventListener('click',()=>
{
    
})