// создать 5 квадратов изначально в них отображается 0
// в каждом квадратов создать кнопки "+" и "-"
// при клике на кнопку "+" цифра внутри квадрата должна увеличиваться
// при клике на кнопку "-" цифра внутри квадрата должна уменьшаться

let buttonPlus = document.querySelectorAll('.wrap__plus');
let buttonMinus = document.querySelectorAll('.wrap__minus');

buttonPlus.forEach(function(item) {
    item.addEventListener('click', function(event) {
    event.target.nextElementSibling.innerHTML++;
    })
})

buttonMinus.forEach(function(item) {
    item.addEventListener('click', function(event) {
    event.target.previousElementSibling.innerHTML--;
    })
})
