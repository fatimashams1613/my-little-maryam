/* =========================
   MUSIC
========================= */

const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", async () => {

    if (!musicPlaying) {

        try {
            await song.play();

            musicPlaying = true;

            musicBtn.innerHTML = "⏸️ Pause Our Song";

        } catch (error) {

            alert("Tap the button again to start the song 🎵");

        }

    } else {

        song.pause();

        musicPlaying = false;

        musicBtn.innerHTML = "🎵 Play Our Song";
    }
});


/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   LOVE MESSAGE
========================= */

function showMessage(message) {

    const box = document.getElementById("messageBox");

    box.innerHTML = message;

    box.style.transform = "scale(1.03)";

    setTimeout(() => {
        box.style.transform = "scale(1)";
    }, 200);

}


/* =========================
   QUIZ
========================= */

let score = 0;

let answeredQuestions = new Set();

function answer(button, correct) {

    const question = button.closest(".question");

    if (question.dataset.answered === "true") {
        return;
    }

    question.dataset.answered = "true";

    const questionNumber =
        Array.from(document.querySelectorAll(".question"))
        .indexOf(question);

    answeredQuestions.add(questionNumber);

    const buttons = question.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (correct) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        buttons.forEach(btn => {

            if (
                btn.getAttribute("onclick") &&
                btn.getAttribute("onclick").includes("true")
            ) {
                btn.classList.add("correct");
            }

        });

    }

    updateQuizResult();
}


function updateQuizResult() {

    const result = document.getElementById("quizResult");

    const total = 4;

    if (answeredQuestions.size < total) {

        result.innerHTML =
            `You've answered ${answeredQuestions.size}/${total} 💗<br>
             Keep going, Maryam 👀`;

        return;
    }

    if (score === 4) {

        result.innerHTML =
            `🎉 ${score}/${total}!<br>
             OKAYYY you actually know me. 😭💗`;

    } else if (score >= 2) {

        result.innerHTML =
            `😂 ${score}/${total}!<br>
             Not bad... but we clearly need more friendship training. 💗`;

    } else {

        result.innerHTML =
            `😭 ${score}/${total}!<br>
             MARYAMMMMM... we need to talk. 😂`;
    }
}


/* =========================
   RESET QUIZ
========================= */

function resetQuiz() {

    score = 0;

    answeredQuestions.clear();

    document.querySelectorAll(".question").forEach(question => {

        question.dataset.answered = "false";

        question.querySelectorAll("button").forEach(button => {

            button.disabled = false;

            button.classList.remove("correct", "wrong");

        });

    });

    document.getElementById("quizResult").innerHTML =
        "Your score will appear here 💗";

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const container =
        document.querySelector(".floating-hearts");

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "💗",
        "💕",
        "♡",
        "♥",
        "🌸",
        "✨"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}


setInterval(createHeart, 900);


/* =========================
   POPUP
========================= */

function showPopup(text) {

    document.getElementById("popupText").innerHTML = text;

    document.getElementById("popup")
        .classList.add("show");

}


function closePopup() {

    document.getElementById("popup")
        .classList.remove("show");

}


/* =========================
   FINAL SURPRISE
========================= */

function makeItRain() {

    const messages = [
        "YOU ARE STUCK WITH ME 😂💗",
        "Friendship contract: PERMANENT. 🫶🏻",
        "Too late to escape now. 😭",
        "Maryam + Fatima = chaos forever. 😂",
        "Thank you for existing. 🤍"
    ];

    let message =
        messages[Math.floor(Math.random() * messages.length)];

    showPopup(message);

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 60);

    }

}


/* =========================
   CLOSE POPUP BY CLICKING OUTSIDE
========================= */

document.getElementById("popup")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closePopup();
        }

    });