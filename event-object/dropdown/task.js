const list = document.querySelector(".dropdown__list");
const button = document.querySelector(".dropdown__value");

button.addEventListener("click", clickButton);
list.addEventListener("click", clickList);

function clickButton() {
  list.classList.toggle("dropdown__list_active");
}
function clickList(event) {
  event.preventDefault();
  button.textContent = event.target.textContent;
  clickButton();
}
