const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const amountInput = document.getElementById("amount");
const target = document.getElementById("target");
const addBtn = document.getElementById("add");
let delBtn;
let itr = 0;

const clearInput = () => {
  nameInput.value = "";
  dateInput.value = "";
  amountInput.value = "";
};

const checkInput = () => {
  return nameInput.value != "" &&
    dateInput.value != "" &&
    amountInput.value != ""
    ? true
    : false;
};

addBtn.addEventListener("click", () => {
  if (checkInput()) {
    target.innerHTML += `<tr id="tr-${itr}">
          <td>${nameInput.value}</td>
          <td>${dateInput.value}</td>
          <td>$${amountInput.value}</td>
          <td><button class="del btn btn-danger">X</button></td>
          </tr>`;
    delBtn = document.querySelectorAll(".del");
    delBtn.forEach((e, i) => {
      e.addEventListener("click", () => {
        document.getElementById(`tr-${i}`).remove();
        itr--;
      });
    });
    itr++;
    clearInput();
  }
});
