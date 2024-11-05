const fontSizeControl = document.querySelectorAll(".book__control_font-size");
const book = document.querySelector(".book");
const controlFontColor = document.querySelectorAll(".book__control_color");
const controlBgColor = document.querySelectorAll(".book__control_background");

fontSizeControl.forEach((fzControl) => {
  let fontsSizeItem = fzControl.querySelectorAll(".font-size");
  fontsSizeItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      item.classList.remove("font-size_active");
      book.classList.remove("font-size_small", "font-size_big");

      let size = "font-size_" + item.getAttribute("data-size");

      item.classList.add(".font-size_active");
      book.classList.add(size);
    });
  });
});

controlFontColor.forEach((fontColor) => {
  let fontColorItem = fontColor.querySelectorAll(".color");
  fontColorItem.forEach((colorItem) => {
    colorItem.addEventListener("click", (event) => {
      event.preventDefault();

      colorItem.classList.remove("color_active");
      book.classList.remove(
        "book_color-black",
        "book_color-gray",
        "book_color-whitesmoke"
      );

      let textColor = "book_color-" + colorItem.getAttribute("data-text-color");
      colorItem.classList.add(".color_active");
      book.classList.add(textColor);
    });
  });
});

controlBgColor.forEach((bgColor) => {
  let bgColorItem = bgColor.querySelectorAll(".color");
  bgColorItem.forEach((colorBgItem) => {
    colorBgItem.addEventListener("click", (event) => {
      event.preventDefault();

      colorBgItem.classList.remove("color_active");
      book.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white");

      let bgColor = "book_bg-" + colorBgItem.getAttribute("data-bg-color");
      colorBgItem.classList.add(".color_active");
      book.classList.add(bgColor);
    });
  });
});
