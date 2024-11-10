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


function mostrar() {
  const tipus = document.getElementById("tipusCalculadora").value;
  const nom = document.getElementById("nom").value;
  localStorage.setItem("nomUsuari", nom);
  localStorage.setItem("tipusCalculadora", tipus);

  if (tipus == "normal") {
    window.location.href = "/html/calculadora.html";
  } else if (tipus == "cientifica") {
    window.location.href = "/html/calculadoraCientifica.html";
  }

  alert("S'ha guardat el nom i el tipus de calculadora");
}


function mostrarZero() {
  document.getElementById("resultat").value = valorInicial; // MIRAR ON FICAR-HO DINS D'UNA FUNCIO

}

// errors();
function errors(missatge) {
  // let tornActual = operador1;
  // // document.getElementById("errors").value = "Prova d'error";
  // if(tornActual.length>5){
  //   document.getElementById("errors").value = "Error, massa dígits";
  // }
  document.getElementById("errors").innerText = missatge + ",fes enter a la URL per a poder continuar";
}

function opcio(parametreOperacio) {
  operacio = parametreOperacio;
  torn = !torn;
  // document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
}


function calcular() { // Mirar que ficar en les condicions, perque no igualo cap valor
  let numero1 = parseFloat(operador1);
  let numero2 = parseFloat(operador2);

  // NO ACABA DE FUNCIONAR AMB IF

  // if(operacio=="+"){
  //  resultat = numero1 + numero2;
  // }else if(operacio == "-"){
  //   resultat = numero1 - numero2;
  // }else if(operacio == "*"){
  //   resultat = numero1 * numero2;
  // }else{
  //   resultat = numero1 / numero2;
  // }

  switch (operacio) {
    case "+":
      resultat = numero1 + numero2;
      break;
    case "-":
      resultat = numero1 - numero2;
      break;
    case "*":
      resultat = numero1 * numero2;
      break;
    case "/":
      resultat = numero1 / numero2;
      break;
  }

  document.getElementById("resultat").value = resultat;

  // canviarTorn();
}

function mostrarResultat() {
  calcular();
  torn = true;  // per a que comenci amb el primer operador
  operacio = "";
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

function potencia(){
  let mostrar = document.getElementById("resultat").value;
  let numero = parseFloat(mostrar.value);

  mostrar.value = Math.pow(numero, 2);
}

function tractarUn() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "1";
    resultat = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "1";
    resultat = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarDos() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "2";
    pantalla = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "2";
    resultat = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarTres() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "3";
    resultat = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "3";
    resultat = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarQuatre() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "4";
    resultat = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "4";
    resultat = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarCinc() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "5";
    pantalla = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "5";
    pantalla = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarSis() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "6";
    pantalla = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "6";
    pantalla = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarSet() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "7";
    pantalla = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "7";
    pantalla = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarVuit() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "8";
    pantalla = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "8";
    pantalla = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarNou() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "9";
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "9";
    pantalla = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}

function tractarZero() {
  if (torn) {
    if (operador1.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador1 = operador1 + "0";
    pantalla = document.getElementById("resultat").value = operador1;
    document.getElementById("resultat").value = operador1 + " " + operacio;
  } else {
    if (operador2.length >= 6) {
      errors("Massa digits");
      return;
    }
    operador2 = operador2 + "0";
    pantalla = document.getElementById("resultat").value = operador2;
    document.getElementById("resultat").value = operador1 + " " + operacio + " " + operador2;
  }
}



// function resultat(){
//   pantalla = document.getElementById("resultat");
//   pantalla.value = resultat;
// }

function esborrar() {
  operador1 = "";
  operador2 = "";
  operacio = "";
  torn = true;

  document.getElementById("resultat").value = "0";
}

function esborrarUltim() {

}

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}

