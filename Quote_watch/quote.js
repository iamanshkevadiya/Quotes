let quotes = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Make your character so good that, a blind man can see your Kindness. - Unknown",
    "Do one thing every day that scares you. -Eleanor Roosevelt",
    "Situation, Time, People these three things teach better lessons than a book. - Unknown",
    "Never Complain about the difficulaties in ilfe, Bcoz a God always give the hardest roles to his Best actors. - Dr. A.P.J Abdul Kalam",
    "History forgets whiners but remembers winners. - Unknown",
];

let QuoteIndex = 0;
let quoteElement = document.getElementById('quote');
let countdown = document.getElementById('countdown');

function showQuote() {
    quoteElement.innerHTML = quotes[QuoteIndex];
    QuoteIndex = (QuoteIndex + 1) % quotes.length;
}

function startCountdown(duration) {
    let timer = duration;
    let interval = setInterval(() => {
        countdown.innerHTML = timer;
        if (timer-- === 0) {
            clearInterval(interval);
            showQuote();
            startCountdown(30);
        }
    }, 400);
}

document.addEventListener('DOMContentLoaded', () => {
    showQuote();
    startCountdown(30);
});


