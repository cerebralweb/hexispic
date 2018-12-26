var illustration;
var cantidad;
var total;

illustration = 6;
cantidad = 10;
total = illustration * cantidad;

var x = document.getElementById("cost");
x.textContent = "Ten illustrations worth " + '$' + total;

var colores = ['blanco', 'negro', '#FFF'];

var m = document.getElementById('colorBanner');
m.textContent = "soy una palabra de color " + colores[2];


