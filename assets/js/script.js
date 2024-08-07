let $days = document.getElementById('hari');
let $hours = document.getElementById('jam');
let $minutes = document.getElementById('menit');
let $seconds = document.getElementById('detik');

// Calculate the date 51 days from now
let now = new Date();
let daysToAdd = 51;
let countdownDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

setInterval(function() {
    var now = new Date();
    var timeleft = (countdownDate - now) / 1000;
    updateclock(timeleft);
}, 1000);

function updateclock(remainingTime) {

    let days = Math.floor(remainingTime / 86400);
    remainingTime -= days * 86400;

    let hours = Math.floor(remainingTime / 3600) % 24;
    remainingTime -= hours * 3600;

    let minutes = Math.floor(remainingTime / 60) % 60;
    remainingTime -= minutes * 60;

    let seconds = Math.floor(remainingTime % 60);

    $days.innerHTML = Number(days);
    $hours.innerHTML = Number(hours);
    $minutes.innerHTML = Number(minutes);
    $seconds.innerHTML = Number(seconds);

}

function Number(number) {
    return number < 10 ? "0" + number : number;
}

const popupScreen = document.querySelector(".popup");
const popupKonfirmasi = document.querySelector(".popup-konfirmasi");
const popupKirim = document.querySelector(".popup-kirim");

function btnKonfirmasi() {
    console.log("berhasil masuk konfirmasi popup");
    popupScreen.style.display = "flex";
    popupKonfirmasi.style.display = "block";
    popupKirim.style.display = "none";
    start();
}

function btnKirim() {
    console.log("berhasil masuk kirim popup");
    popupScreen.style.display = "flex";
    popupKirim.style.display = "block";
    popupKonfirmasi.style.display = "none";
    start();
}

function btnExit() {
    console.log("berhasil keluar popup");
    popupScreen.style.display = "none";
    popupKonfirmasi.style.display = "none";
    popupKirim.style.display = "none";
    start();
}

const musicPlay = document.querySelector("#music-on");
const musicStop = document.querySelector("#music-mute");
const musicAuto = document.querySelector("#musik");

musicAuto.play();
musicAuto.loop = true;

function musicMute(event) {
    event.preventDefault();
    musik.muted = true;
    musicPlay.style.display = "none";
    musicStop.style.display = "flex";
}

function musicOn(event) {
    event.preventDefault();
    musik.muted = false;
    musicStop.style.display = "none";
    musicPlay.style.display = "flex";
}

const containerIndex = document.querySelector(".container-index");
const containerContent = document.querySelector(".container-content");

function btnBukaUndangan() {
    console.log("berhasil buka undangan");
    containerIndex.style.display = "none";
    containerContent.style.display = "block";
    start();
}