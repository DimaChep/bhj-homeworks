const timer = document.getElementById("timer");
console.log(timer.textContent);

const timerId = setInterval(() => {
  const value = +timer.textContent;
  timer.textContent = value - 1;
  if (value > 1) {
    timerId.textContent = value - 1;
  } else {
    clearInterval(timerId);
    alert("Вы победили в конкурсе!");
  }
}, 1000);
