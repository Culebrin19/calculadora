document.getElementById("errors").value = "Prova d'error";
    var torn = true; // boolean, si es fa click a una operacio, canvia de true (operador 1) a false (operador 2)
    var operador1 = "";
    var operador2 = "";
    var resultat = "";
    var operacio = "";

    // FALTA IMPRIMIR 0 AL INICI DE LA CALCULADORA
    // TAMBÉ QUE AL FER CLICK A UNA OPERACIO NO ES BORRIN ELS VALORS DE L'ALTRE OPERANT
    // FALTA QUE AL FER CLICK A = MOSTRI EL RESULTAT

    function tractarUn(){
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

    function tractarDos(){
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

    function tractarTres(){
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

    function tractarQuatre(){
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

    function tractarZero(){
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
      document.getElementById("resultat").value = resultat;
      torn = !torn; // mirara si canvia el valor de torn de true a false
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