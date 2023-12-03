// function to play the Music 

var play=document.getElementById("playmusic")
var is_pause=false // no pause

var music =document.querySelector('audio')

play.addEventListener("click",()=>{
    play.classList.replace("fa-play","fa-pause")
    console.log(music)
    music.play();

})