const deadCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");

function reloadGame() {
  deadCount.textContent = 0;
  lostCount.textContent = 0;
}

getHole = (index) => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);

  hole.onclick = () => {
    if (hole.classList.contains("hole_has-mole")) {
      deadCount.textContent++;
    } else {
      lostCount.textContent++;
    }

    if (deadCount.textContent >= 10) {
      alert("Победа!");
      reloadGame();
    }

    if (lostCount.textContent >= 5) {
      alert("Поражение!");
      reloadGame();
    }
  };
}
