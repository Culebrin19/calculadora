document.getElementById("errors").value = "Prova d'error";
    var torn = true; // boolean, si es fa click a una operacio, canvia de true (operador 1) a false (operador 2)
    var operador1 = 0;
    var operador2 = 0;
    var resultat = 0;
    var operacio = "";


    function tractarUn(){
      if (torn) {
        operador1 = operador1 + "1";
        pantalla = document.getElementById("resultat");
        pantalla.value = operador1;
      } else {
        operador2 = operador2 + "1";
        pantalla = document.getElementById("resultat");
        pantalla.value = operador2;
      }
    }

    function tractarDos(){
      if (torn) {
        operador1 = operador1 + "2";
        pantalla = document.getElementById("resultat");
        pantalla.value = operador1;
      } else {
        operador2 = operador2 + "2";
        pantalla = document.getElementById("resultat");
        pantalla.value = operador2;
      }
    }

    function tractarTres(){
      if (torn) {
        operador1 = operador1 + "3";
        pantalla = document.getElementById("resultat");
        pantalla.value = operador1;
      } else {
        operador2 = operador2 + "3";
        pantalla = document.getElementById("resultat");
        pantalla.value = operador2;
      }
    }

    function tractarQuatre(){
      if (torn) {
        operador1 = operador1 + "4";
        pantalla = document.getElementById("resultat");
        pantalla.value = operador1;
      } else {
        operador2 = operador2 + "4";
        pantalla = document.getElementById("resultat");
        pantalla.value = operador2;
      }
    }

    function tractarCinc(){
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

    function tractarSis(){
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

    function tractarSet(){
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

    function tractarVuit(){
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

    function tractarNou(){
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
    

    function calcular() {
      // mirar que ficar, operacio està per estar
      if (operacio == "+") {
      resultat = operador1 + operador2;
      } else if (operacio == "-") {
      resultat = operador1 - operador2;
      } else if (operacio == "*") {
      resultat = operador1 * operador2;
      } else if (operacio == "/") {
      resultat = operador1 / operador2;
      }
      torn = !torn; // mirara si canvia el valor de torn de true a false
    }

    function esborrar() {
      operador1 = 0;
      operador2 = 0;
    }