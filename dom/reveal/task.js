const searchBlock = document.querySelector(".reveal");

function inVisible(element) {
  const { top, bottom } = searchBlock.getBoundingClientRect();

  if (top > window.innerHeight) {
    return false;
  }

  if (bottom < 0) {
    return false;
  }

  return true;
}

window.addEventListener("scroll", () => {
    if (inVisible(searchBlock)) {
    searchBlock.classList.add("reveal_active");
  } else {
    searchBlock.classList.remove("reveal_active");
  }
});
