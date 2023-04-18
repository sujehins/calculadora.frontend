function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacion = document.getElementById("operacion").value;
    var resultado;

    if (operacion == "+") {
      resultado = parseFloat(num1) + parseFloat(num2);
    } else if (operacion == "-") {
      resultado = parseFloat(num1) - parseFloat(num2);
    } else if (operacion == "*") {
      resultado = parseFloat(num1) * parseFloat(num2);
    } else if (operacion == "/") {
      resultado = parseFloat(num1) / parseFloat(num2);
    }

    document.getElementById("resultado").innerHTML = resultado;
  }