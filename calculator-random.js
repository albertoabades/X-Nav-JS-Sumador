function suma(operando, resultado){
	var operacion = document.getElementById(operando);
	var operandos = operacion.innerHTML.split("+");
	var result = document.getElementById(resultado);
	var total = parseInt(operandos[0]) + parseInt(operandos[1]);
	result.innerHTML = "=" + total;
}
function opAleatorios(operando){
	var operacion = document.getElementById(operando);
	operacion.innerHTML = Math.round(Math.random()*1000) + "+"
	+ Math.round(Math.random()*1000);
}