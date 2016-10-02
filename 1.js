(function() {
    var img_play = document.getElementById("img_play");
    var audio_player = document.getElementById("audio_player");
    var audio_paused = document.getElementsByClassName("div_paused")[0];
    img_play.onclick = function() {

        if (audio_player.paused) {
            audio_player.play();
            img_play.src = "images/play.jpg";

            audio_paused.style.display = "none";
        } else {
            audio_player.pause();
            img_play.src = "images/play1.jpg";

            audio_paused.style.display = "block"
        }
    }
    var time = document.getElementsByClassName("div_player_time")[0];
    audio_player.ontimeupdate = function() {
        var currentTime = parseFloat(audio_player.currentTime);
        var duration = parseFloat(audio_player.duration);
        var a = parseInt((currentTime - duration) / 60);
        var b = parseFloat((duration - currentTime) % 60).toFixed(1);
        if (b < 10) {
            b = "0" + b;
        } else {
            b = b;
        }
        time.innerHTML = a + ":" + b;






        var move = document.getElementsByClassName("div_move")[0];
        move.style.width = parseFloat(audio_player.currentTime / audio_player.duration) * 100 + "%";
        if (move.style.width == "100%") {
            move.style.width = "0%";
        }
    }


















}(window))
