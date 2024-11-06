const rotatorCases = document.querySelectorAll(".rotator__case");
let currentIndex = 0;

let inetrvalID = setInterval(rotate, 100);

function rotate() {

  const currentCase = rotatorCases[currentIndex];

  currentCase.classList.remove("rotator__case_active");

  currentIndex = (currentIndex + 1) % rotatorCases.length;

  const nextCase = rotatorCases[currentIndex];

  nextCase.style.color = nextCase.dataset.color;

  nextCase.classList.add("rotator__case_active");

  let speed = parseInt(nextCase.dataset.speed, 10);
  clearInterval(inetrvalID);
  inetrvalID =  setInterval(rotate, speed)
}

