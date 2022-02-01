document.getElementById("amburger-icon").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("navigation__list").classList.toggle("none");
});

window.addEventListener('scroll', (e)=>{
    if(window.scrollY > 0 ) return  document.getElementById("navigation").classList.add("active");
    return document.getElementById("navigation").classList.remove("active");
})


let play = false;
document.getElementById("btn_run").addEventListener("click", function(e) {
    const btnPlay = document.getElementById("video1");
    const audioPlay = document.getElementById("audio1");
    if(!play){
        document.getElementById("runVideo").classList.add("active");
        btnPlay.play();
        audioPlay.play();
        play = true;
    }else{
        document.getElementById("runVideo").classList.remove("active");
        btnPlay.pause();
        audioPlay.pause();
        play = false;
    }
})