var illustration;
var cantidad;
var total;

illustration = 6;
cantidad = 10;
total = illustration * cantidad;

var x = document.getElementById("cost");
x.textContent = "Ten illustrations worth " + '$' + total;

var colores = ['blanco', 'azure', '#FFF'];

colores[3] = 'negro';

var m = document.getElementById('colorBanner');
m.textContent = "soy una palabra de color " + colores[3];

var name = "Bernardo";
var sayHello = "hola";
var hola = name + sayHello;

var saludar = document.getElementById('saludo');
saludar.textContent = hola;



var costoIlustracion = 5;
var cantidadIlustracionesSitioTipoOriginal = 8;
var total = costoIlustracion * cantidadIlustracionesSitioTipoOriginal;

var costoParcialIlustraciones = document.getElementById ('sitioTipoOriginalConIlustraciones');
costoParcialIlustraciones.textContent = total;

