function deny() {
    var deny = new Audio('Assets/Pages/Backrooms/deny.mp3');
    deny.play();




}

function wake_up() {


    document.getElementById("backrooms_background").style.backgroundImage = "url(Assets/Pages/Backrooms/back.png)";
    var music = new Audio('Assets/Pages/Backrooms/music.mp3');
    music.play();

 document.getElementById('options').innerHTML = "";

}