const searchBlock = document.querySelectorAll(".reveal");

searchBlock.forEach( element => {

function inVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();

  if (top > window.innerHeight) {
    return false;
  }

  if (bottom < 0) {
    return false;
  }

  return true;
}

window.addEventListener("scroll", () => {
    if (inVisible(element)) {
      element.classList.add("reveal_active");
  } else {
     element.classList.remove("reveal_active");
  }
});

});