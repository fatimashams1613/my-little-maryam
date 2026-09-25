/* ---------------- MUSIC ---------------- */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", function () {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "🎶 <span>our song is playing</span>";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 <span>play our song</span>";

        playing = false;
    }

});


/* ---------------- SCROLL ---------------- */

function scrollToMemories() {

    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });

}


/* ---------------- CARD POPUP ---------------- */

const cardModal = document.getElementById("cardModal");

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const modalEmoji = document.getElementById("modalEmoji");


function openCard(card) {

    const title = card.querySelector("h3").innerText;

    const emoji = card.querySelector(".emoji").innerText;

    const message = card.querySelector(".hidden-message").innerText;


    modalTitle.innerText = title;

    modalEmoji.innerText = emoji;

    modalText.innerText = message;

    cardModal.classList.add("show");

}


function closeCard() {

    cardModal.classList.remove("show");

}


/* close popup when clicking outside */

cardModal.addEventListener("click", function(e) {

    if (e.target === cardModal) {
        closeCard();
    }

});


/* ---------------- PHOTO POPUP ---------------- */

const photoModal = document.getElementById("photoModal");

const bigPhoto = document.getElementById("bigPhoto");


function openPhoto(image) {

    bigPhoto.src = image.src;

    photoModal.classList.add("show");

}


function closePhoto() {

    photoModal.classList.remove("show");

}


/* ---------------- ESCAPE KEY ---------------- */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {

        closeCard();

        closePhoto();

    }

});


/* ---------------- FLOATING HEARTS ---------------- */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = ["♡", "♥", "💗", "💕"][Math.floor(Math.random() * 4)];

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (12 + Math.random() * 15) + "px";

    heart.style.color = "#e889aa";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1";

    heart.style.opacity = ".65";

    heart.style.transition = "transform 5s linear, opacity 5s linear";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 100}px) rotate(360deg)`;

        heart.style.opacity = "0";

    }, 50);


    setTimeout(() => {

        heart.remove();

    }, 5100);

}


setInterval(createHeart, 1200);