const area = document.getElementById("editor");

area.value = localStorage.getItem("area");
area.oninput = () => {
  localStorage.setItem("area", area.value);
};
