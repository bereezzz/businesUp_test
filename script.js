// Получаем ссылки на элементы
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var modalMob = document.getElementById("openModalMobile");

// Открываем модальное окно при клике на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}
modalMob.onclick = function() {
  modal.style.display = "block";
}
// Закрываем модальное окно при клике на крестик
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const privacyCheckbox = document.getElementById('privacyCheckbox');
const submitButton = document.getElementById('submitButton');

privacyCheckbox.addEventListener('change', function() {
    submitButton.disabled = !privacyCheckbox.checked;
});

const icon = document.getElementById("icon");
const miniWindow = document.getElementById("miniWindow");

icon.addEventListener("click", () => {
  if (miniWindow.style.display === "none") {
    miniWindow.style.display = "block";
  } else {
    miniWindow.style.display = "none";
  }
});
