const currencyURL =
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses";

const xhr = new XMLHttpRequest();
xhr.open("GET", currencyURL);
xhr.responseType = "json";

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    document.querySelector("#loader").classList.remove("loader_active");
    const valute = Object.entries(xhr.response.response.Valute);
    //Удаляю ненужные элементы html:
    const deletedItem = document.getElementsByClassName("item")[0];
    deletedItem.remove();

    //Перебираю полученные данные с сервера:
    valute.forEach((e) => {
      const divItems = document.getElementById("items");
      const divNewItem = divItems.insertAdjacentHTML(
        "beforeEnd",
        `<div class='item'>
          <div class="item__code">${e[1].CharCode}</div>
          <div class="item__value">${e[1].Value}</div>
          <div class="item__currency">руб.</div>
        </div>`
      );
    });
  } else {
    xhr.onerror = () => {
      console.log(xhr.readyState);
    };
  }
});
xhr.send();
