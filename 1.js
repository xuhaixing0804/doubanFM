(function() {
    var img_laba = document.getElementById("img_laba");
    var control_voice = document.getElementsByClassName("div_control_voice")[0];
    img_laba.onmouseover = function() {
        if (control_voice.style.display == "none") {
            control_voice.style.display = "block";
            img_laba.src = "images/play1.jpg";
        } else {
            control_voice.style.display = "none";
            img_laba.src = "images/laba.png";
        }
    }

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
        var b = parseFloat((duration - currentTime) % 60).toFixed(0);
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
    var x_process, x_border, x_move, x_over, x_star;
    var voice_move = document.getElementsByClassName("div_voice_move")[0];
    var voice_border = document.getElementsByClassName("div_voice_border")[0];
    var voice_process = document.getElementsByClassName("div_voice_process")[0];
    voice_move.ondragstart = function(event) {
        x_star = event.clientX;
        x_border = voice_border.clientWidth;
        x_process = voice_process.clientWidth;
    }
    voice_move.ondragend = function(event) {
        x_over = event.clientX;
        x_move = (x_over - x_star + x_process) / x_border;
        console.log(x_move)
        if (x_move <= 0) {
            audio_player.volume = 0;
        } else if (x_move >= 1) {
            audio_player.volume = 1;
        } else {
            audio_player.volume = x_move;
        }
        voice_process.style.width = "100%";
        voice_process.style.width = audio_player.volume * 100 + "%";
    }

















}(window))
