var extra = [].slice.call(document.getElementsByClassName('extra'));
let yourDelivery = document.getElementById('yourDelivery').value;
let btn = document.querySelector('.reserve');
var yourSize;
var sum;
var yourExtras = 0;
extra.forEach(function (element, index) {
    element.addEventListener('click', function () {
        if (element.style.boxShadow === "none") {
            element.style.boxShadow = "box-shadow: 8px 8px 5px #e1514f"
        } else {
            element.style.boxShadow = "none";
        }
        console.log("you clicked slider controler " + index + "!");
        if (element) {
            yourExtras += 2;
            console.log(yourExtras);
        } else {
            yourExtras = 0;
        }
    });
});

btn.addEventListener('click', function () {
    let size = document.getElementById('yourSize').value;
    if (size === "10") {
        yourSize = 10;
    } else if (size === "20") {
        yourSize = 20;
    } else {
        yourSize = 30;
    }

    if (yourDelivery === 'restaurant') {
        yourDelivery = 0;
        console.log('Odbiór w punkcie');
    } else {
        yourDelivery = 5;
        console.log('Wybrałeś opcję z dostawą do domu');
    }
    sum = yourExtras + yourSize + yourDelivery;
    console.log('Proszę przygotować do zapłaty: ' + sum + ' zł');
    swal("Dziękujemy za złożenie zamówienia!", "Proszę przygotować do zapłaty: " + sum + 'zł', {
        buttons: false,
        timer: 8000,
    })
});
