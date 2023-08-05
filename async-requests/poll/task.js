const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.responseType = "json";

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const survey = xhr.response;
    pollTitle.append(survey.data.title);
    const answers = survey.data.answers;
    answers.forEach((i) => {
      pollAnswers.innerHTML += `<button class="poll__answer">${i}</button>`;
    });

    const buttons = document.getElementsByClassName("poll__answer");
    console.log(buttons);

    for (let elem of buttons) {
      elem.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
        window.location.reload();
      });
    }
  } else {
    xhr.onerror = () => {
      console.log(xhr.readyState);
    };
  }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
