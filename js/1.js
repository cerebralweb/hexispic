var illustration;
var cantidad;
var total;

illustration = 8;
componentecss = 5;
jsRedes = 3;
jquery = 50;
nodojavascript = 70;
cantidad = 0;
subtotalPlantilla = 60;
subTotalDesign = 100;
esquema = 10;
foto = 2; 
hybridapp = 50;

total = (illustration * cantidad) + subtotalPlantilla;

var s1Plantilla = document.getElementById("costS1");
s1Plantilla.textContent = total;

var s1Original = document.getElementById("costS1original");
s1Original.textContent = subTotalDesign +  ((jsRedes * 5) + (componentecss * 1) + (illustration * 1) + (foto * 1) + esquema);

var s2 = document.getElementById("costoS2");
s2.textContent = subTotalDesign + ((illustration * 5) + (componentecss * 3) + (jquery)  + (foto * 10) + esquema)

var s3 = document.getElementById("costoS3");
s3.textContent = subTotalDesign + ((illustration * 10) + (componentecss = 5) + (nodojavascript) + (foto * 20) + esquema);


var s4 = document.getElementById("costoS4");
s4.textContent = subTotalDesign + ((illustration * 10) + (componentecss = 5) + (hybridapp));





//Otros ejercicios








