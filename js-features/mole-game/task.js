let goodClick = document.getElementById("dead");
let badClick = document.getElementById("lost");

let score = Number(goodClick.textContent);
let misses = Number(badClick.textContent);

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function clearResult() {
  goodClick.textContent = 0;
  badClick.textContent = 0;
  score = 0;
  misses = 0;
}

for (let i = 1; i <= 10; i++) {
  getHole(i).addEventListener("click", () => {
    if (getHole(i).className.includes("hole_has-mole")) {
      score++;
      goodClick.textContent = score;
    } else {
      misses++;
      badClick.textContent = misses;
    }

    if (score === 10) {
      alert("Поздравляем ты победил!");
      clearResult();
    }

    if (misses === 5) {
      alert("Вы проиграли");
      clearResult();
    }
  });
}
