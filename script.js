// Устанавливаем дату окончания отсчета
const targetDate = new Date("January 26, 2025 00:00:00").getTime();

// Получаем элементы
const countdownElement = document.getElementById("countdown");
const timerContainer = document.getElementById("timer");
const videoContainer = document.getElementById("video-container");
const emojiContainer = document.getElementById("emoji-container");

// Список смайликов для анимации
const emojis = ["🎉", "🎂", "🎈", "✨", "💖", "🎁", "🍰", "🥳"];

// Функция для создания смайликов
function createEmoji() {
  const emoji = document.createElement("div");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.className = "emoji";

  // Случайная позиция
  emoji.style.left = Math.random() * 100 + "%";
  emoji.style.top = Math.random() * 100 + "%";
  
  emojiContainer.appendChild(emoji);

  // Удаляем смайлик после завершения анимации
  setTimeout(() => {
    emoji.remove();
  }, 2000);
}

// Запускаем таймер
const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
  } else {
    clearInterval(timerInterval);
    timerContainer.style.display = "none";
    videoContainer.style.display = "block";

    // Запускаем анимацию смайликов
    setInterval(createEmoji, 500);
  }
}, 1000);
