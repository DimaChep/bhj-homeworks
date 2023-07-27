const interest = Array.from(document.querySelectorAll(".interest"));

interest.forEach((el) => {
  const checkbox = el.querySelector(".interest__check");
  checkbox.addEventListener("change", function () {
    const arr = [...el.querySelectorAll(".interest")];
    if (el.querySelector(".interest__check").checked === true) {
      arr.forEach(
        (elem) => (elem.querySelector(".interest__check").checked = true)
      );
    } else {
      arr.forEach(
        (elem) => (elem.querySelector(".interest__check").checked = false)
      );
    }
  });
});
