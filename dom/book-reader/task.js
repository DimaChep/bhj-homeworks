const book = document.querySelector(".book");
const fontSizeButtons = book.querySelectorAll(".font-size");

function removeClass(className) {
  if (book.classList.contains(className)) {
    book.classList.remove(className);
  }
}

function addClass(className) {
  book.classList.add(className);
}

fontSizeButtons.forEach((sizeButton) => {
  sizeButton.addEventListener("click", function (event) {
    event.preventDefault();
    fontSizeButtons.forEach((sizeButton) => {
      sizeButton.classList.remove("font-size_active");
    });

    sizeButton.classList.add("font-size_active");

    if (sizeButton.classList.contains("font-size_small")) {
      removeClass("book_fs-big");
      addClass("book_fs-small");
    }

    if (sizeButton.classList.contains("font-size_big")) {
      removeClass("book_fs-small");
      addClass("book_fs-big");
    }

    if (
      !sizeButton.classList.contains("font-size_big") &&
      !sizeButton.classList.contains("font-size_small")
    ) {
      removeClass("book_fs-small");
      removeClass("book_fs-big");
    }
  });
});
