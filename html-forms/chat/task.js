const chatWidget = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input");
const messages = document.getElementById("chat-widget__messages");

let hours = String(new Date().getHours()).padStart(2, "0");
let minutes = String(new Date().getMinutes()).padStart(2, "0");
let time = `${hours}:${minutes}`;

chatWidget.addEventListener("click", function () {
  chatWidget.classList.add("chat-widget_active");
  resetTimer();
});

const chatbot = function () {
  const answersOptions = [
    "Мы ещё не проснулись. Позвоните через 10 лет!",
    "Мы ещё эволюционируем...",
    "Подробнее, пожалуйста.",
    "Увы, все операторы в отпуске :-(",
    "Я тут вспомнил...",
    "Мы ничего не будем вам продавать!",
  ];

  const randomIndexAnswer = Math.floor(Math.random() * answersOptions.length);
  const chatbotResponses = answersOptions[randomIndexAnswer];
  setTimeout(() => {
    messages.innerHTML += `
            <div class="message">
                <div class="message__time">${time}</div>
                <div class="message__text">${chatbotResponses}</div>
            </div>
        `;
    scrollToLastMessage();
  }, 1000);
};

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">${input.value}</div>
            </div>
        `;
    input.value = "";
    scrollToLastMessage();

    setTimeout(chatbot, 1000);
    resetTimer();
  }
});

let timerId = 0;
const resetTimer = function () {
  timerId = 0;
};

function scrollToLastMessage() {
  const lastMessage = messages.lastElementChild;
  lastMessage.scrollIntoView({ behavior: "smooth" });
}
