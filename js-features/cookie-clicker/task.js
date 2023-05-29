const image = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
console.log(counter);

image.onclick = () => {
  value = +counter.textContent;
  counter.textContent = value + 1;

  if (image.width === 200) {
    image.width = 220;
  } else {
    image.width = 200;
  }
};
