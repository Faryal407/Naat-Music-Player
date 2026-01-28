//call card 1 buttons
let play1 = document.getElementById("play1");
let pause1 = document.getElementById("pause1");
let time1 = document.getElementById("time1");
let progress1 = document.getElementById("progress1");


let sound1 = new Audio("./music/kabaay-ki-ronaq-kabay-ka-manzar.mp3");

play1.addEventListener("click", () => {
    sound1.play();
})
pause1.addEventListener("click", () =>{
    sound1.pause();
})

sound1.ontimeupdate = () => {
    progress1.value = (sound1.currentTime / sound1.duration) * 100;

    let minutes1 = Math.floor(sound1.currentTime / 60);
    let seconds1 =  Math.floor(sound1.currentTime % 60);

    time1.textContent = `${minutes1}:${seconds1.toString().padStart(2, '0')}`;
};
progress1.oninput = () => {
    sound1.currentTime = (progress1.value / 100) * sound1.duration;
}

//call card 2 buttons
let play2 = document.getElementById("play2");
let pause2 = document.getElementById("pause2");
let time2 = document.getElementById("time2");
let progress2 = document.getElementById("progress2");


let sound2 = new Audio("./music/mera-waliyon-ke-imam.mp3");

play2.addEventListener("click", () => {
    sound2.play();
})
pause2.addEventListener("click", () => {
    sound2.pause()
})

sound2.ontimeupdate = () => {
    progress2.value = (sound2.currentTime / sound2.duration) * 100;

    let minutes2 = Math.floor(sound2.currentTime / 60);
    let seconds2 =  Math.floor(sound2.currentTime % 60);

    time2.textContent = `${minutes2}:${seconds2.toString().padStart(2, '0')}`;
};
progress2.oninput = () => {
    sound2.currentTime = (progress2.value / 100) * sound2.duration;
}

//call card 3 buttons
let play3 = document.getElementById("play3");
let pause3 = document.getElementById("pause3");
let time3 = document.getElementById("time3");
let progress3 = document.getElementById("progress3");


let sound3 = new Audio("./music/makkah-yaad-aata-hai.mp3");


play3.addEventListener("click", () => {
    sound3.play();
})
pause3.addEventListener("click", () => {
    sound3.pause();
})

sound3.ontimeupdate = () => {
    progress3.value = (sound3.currentTime / sound3.duration) * 100;

    let minutes3 = Math.floor(sound3.currentTime / 60);
    let seconds3 =  Math.floor(sound3.currentTime % 60);

    time3.textContent = `${minutes3}:${seconds3.toString().padStart(2, '0')}`;
};
progress3.oninput = () => {
    sound3.currentTime = (progress3.value / 100) * sound3.duration;
}

//call card 4 buttons
let play4 = document.getElementById("play4");
let pause4 = document.getElementById("pause4");
let time4 = document.getElementById("time4");
let progress4 = document.getElementById("progress4");


let sound4 = new Audio("./music/main-to-ummati-hoon.mp3");


play4.addEventListener("click", () => {
    sound4.play();
})
pause4.addEventListener("click", () => {
    sound4.pause();
})

sound4.ontimeupdate = () => {
    progress4.value = (sound4.currentTime / sound4.duration) * 100;

    let minutes4 = Math.floor(sound4.currentTime / 60);
    let seconds4 =  Math.floor(sound4.currentTime % 60);

    time4.textContent = `${minutes4}:${seconds4.toString().padStart(2, '0')}`;
};
progress4.oninput = () => {
    sound4.currentTime = (progress4.value / 100) * sound4.duration;
}

//call card 5 buttons
let play5 = document.getElementById("play5");
let pause5 = document.getElementById("pause5");
let time5 = document.getElementById("time5");
let progress5 = document.getElementById("progress5");


let sound5 = new Audio("./music/muhammad-ka-roza.mp3");


play5.addEventListener("click", () => {
    sound5.play();
})
pause5.addEventListener("click", () => {
    sound5.pause();
})

sound5.ontimeupdate = () => {
    progress5.value = (sound5.currentTime / sound5.duration) * 100;

    let minutes5 = Math.floor(sound5.currentTime / 60);
    let seconds5 =  Math.floor(sound5.currentTime % 60);

    time5.textContent = `${minutes5}:${seconds5.toString().padStart(2, '0')}`;
};
progress5.oninput = () => {
    sound5.currentTime = (progress5.value / 100) * sound5.duration;
}