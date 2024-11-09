var torn = true; // boolean, si es fa click a una operacio, canvia de true (operador 1) a false (operador 2)
var operador1 = 0;
var operador2 = 0;
var resultat = 0;
var operacio = "";
var valorInicial = 0;

// var operand1 = "0";

// document.addEventListener("DOMContentLoaded", function () {
//   operand1 = "0";
//   document.getElementById("resultat").value = operand1;
// });

// FALTA IMPRIMIR 0 AL INICI DE LA CALCULADORA
// TAMBÉ QUE AL FER CLICK A UNA OPERACIO NO ES BORRIN ELS VALORS DE L'ALTRE OPERANT
// FALTA QUE AL FER CLICK A = MOSTRI EL RESULTAT

function mostrarZero() {
  document.getElementById("resultat").value = valorInicial; // MIRAR ON FICAR-HO DINS D'UNA FUNCIO
}

// errors();
function errors() {
  document.getElementById("errors").value = "Prova d'error";
  if(document.getElementById("resultat")){
    
  }
}

function opcio(parametreOperacio){
  opcio=parametreOperacio;
  torn = !torn;
}


function calcular(){ // Mirar que ficar en les condicions, perque no igualo cap valor
  let numero1 = parseFloat(operador1);
  let numero2= parseFloat(operador2);

  if(operacio=="+"){
   resultat = numero1 + numero2;
  }else if(operacio == "-"){
    resultat = numero1 - numero2;
  }else if(opcio == "*"){
    resultat = numero1 * numero2;
  }else{
    resultat = numero1 / numero2;
  }

  document.getElementById("resultat").value=resultat;
  
  // canviarTorn();
}


// function canviarTorn() {
//   // MIRAR COM INDICAR-LI A QUIN TIPUS D'OPERACIO ES FA CLICK
//   if (operacio == "+") {
//     torn = !torn;
//     document.getElementById("errors").value = "Prova d'error sumar";
//     // resultat = operador1 + operador2;
//   } else if (operacio == "-") {
//     torn = !torn;
//     document.getElementById("errors").value = "Prova d'error restar";
//     resultat = operador1 - operador2;
//   } else if (operacio == "*") {
//     torn = !torn;
//     document.getElementById("errors").value = "Prova d'error mutiplicar";
//     resultat = operador1 * operador2;
//   } else if (operacio == "/") {
//     torn = !torn;
//     document.getElementById("errors").value = "Prova d'error dividir";
//     resultat = operador1 / operador2;
//   }
//   // torn = !torn; // mirara si canvia el valor de torn al contrari
//   document.getElementById("resultat").value = resultat;
// }


function tractarUn() {
  if (torn) {
    operador1 = operador1 + "1";
    resultat = document.getElementById("resultat");
    resultat.value = operador1;
  } else {
    operador2 = operador2 + "1";
    resultat = document.getElementById("resultat");
    resultat.value = operador2;
  }
}

function tractarDos() {
  if (torn) {
    operador1 = operador1 + "2";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador1;
  } else {
    operador2 = operador2 + "2";
    resultat = document.getElementById("resultat");
    resultat.value = operador2;
  }
}

function tractarTres() {
  if (torn) {
    operador1 = operador1 + "3";
    resultat = document.getElementById("resultat");
    resultat.value = operador1;
  } else {
    operador2 = operador2 + "3";
    resultat = document.getElementById("resultat");
    resultat.value = operador2;
  }
}

function tractarQuatre() {
  if (torn) {
    operador1 = operador1 + "4";
    resultat = document.getElementById("resultat");
    resultat.value = operador1;
  } else {
    operador2 = operador2 + "4";
    resultat = document.getElementById("resultat");
    resultat.value = operador2;
  }
}

function tractarCinc() {
  if (torn) {
    operador1 = operador1 + "5";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador1;
  } else {
    operador2 = operador2 + "5";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador2;
  }
}

function tractarSis() {
  if (torn) {
    operador1 = operador1 + "6";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador1;
  } else {
    operador2 = operador2 + "6";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador2;
  }
}

function tractarSet() {
  if (torn) {
    operador1 = operador1 + "7";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador1;
  } else {
    operador2 = operador2 + "7";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador2;
  }
}

function tractarVuit() {
  if (torn) {
    operador1 = operador1 + "8";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador1;
  } else {
    operador2 = operador2 + "8";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador2;
  }
}

function tractarNou() {
  if (torn) {
    operador1 = operador1 + "9";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador1;
  } else {
    operador2 = operador2 + "9";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador2;
  }
}

function tractarZero() {
  if (torn) {
    operador1 = operador1 + "0";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador1;
  } else {
    operador2 = operador2 + "0";
    pantalla = document.getElementById("resultat");
    pantalla.value = operador2;
  }
}


function resultat(){
  resultat = operador1 + operador2;
  document.getElementById("resultat").value=resultat;
}

// function resultat(){
//   pantalla = document.getElementById("resultat");
//   pantalla.value = resultat;
// }

function esborrar() {
  operador1 = "";
  operador2 = "";

  pantalla.value = "";
}

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward;
}