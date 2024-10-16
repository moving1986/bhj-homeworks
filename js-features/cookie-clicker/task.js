let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let counterClick = Number(counter.textContent);

cookie.onclick = function() {
    if (counterClick  % 2 == 0) {
        cookie.width = 300;
    } else {
        cookie.width = 100;
    }
    counterClick++;
    counter.textContent = counterClick;
};