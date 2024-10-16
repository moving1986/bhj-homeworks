const startTimer = document.getElementById("timer");

let timer = Number(startTimer.textContent);

function timerDown() {
  let countDown = setInterval(() => {
    --timer;
    startTimer.textContent = timer;

    if (timer <= 0) {
      clearInterval(countDown);
      alert(" «Вы победили в конкурсе!»");
    }
  }, 1000);
}

timerDown();
