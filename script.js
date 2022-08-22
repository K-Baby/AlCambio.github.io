//Conversion
function Convert() {
	var entrada = document.getElementById('entry').value;
	var salida = document.getElementById('result').value;
	var cantidad = Number(document.getElementById('cant').value);
	if (entrada === "none" || salida === "none") {
		window.alert("Elija las unidades de conversion");
	} else if (cantidad == 0){
		window.alert("Elija la cantidad");
	} else if (entrada == "usd" && salida == "usd") {
		var cons = cantidad;
		document.getElementById('rest').value = cons;
	} else if (entrada == "usd" && salida == "euro") {
		var cons = cantidad*1.01;
		document.getElementById('rest').value = cons;
	} else if (entrada == "usd" && salida == "mn") {
		var cons = cantidad*140;
		document.getElementById('rest').value = cons;
	} else if (entrada == "usd" && salida == "pound") {
		var cons = cantidad*0.85;
		document.getElementById('rest').value = cons;
	} else if (entrada == "euro" && salida == "usd") {
		var cons = cantidad*0.99;
		document.getElementById('rest').value = cons;
	} else if (entrada == "euro" && salida == "euro") {
		var cons = cantidad;
		document.getElementById('rest').value = cons;
	} else if (entrada == "euro" && salida == "mn") {
		var cons = cantidad*140;
		document.getElementById('rest').value = cons;
	} else if (entrada == "euro" && salida == "pound") {
		var cons = cantidad*0.84;
		document.getElementById('rest').value = cons;
	} else if (entrada == "mn" && salida == "usd") {
		var cons = cantidad*0.00715;
		document.getElementById('rest').value = cons;
	} else if (entrada == "mn" && salida == "euro") {
		var cons = cantidad*0.00715;
		document.getElementById('rest').value = cons;
	} else if (entrada == "mn" && salida == "mn") {
		var cons = cantidad;
		document.getElementById('rest').value = cons;
	} else if (entrada == "mn" && salida == "pound") {
		var cons = cantidad*0.00645;
		document.getElementById('rest').value = cons;
	} else if (entrada == "pound" && salida == "usd") {
		var cons = cantidad*1.18;
		document.getElementById('rest').value = cons;
	} else if (entrada == "pound" && salida == "euro") {
		var cons = cantidad*1.18;
		document.getElementById('rest').value = cons;
	} else if (entrada == "pound" && salida == "mn") {
		var cons = cantidad*155;
		document.getElementById('rest').value = cons;
	} else if (entrada == "pound" && salida == "pound") {
		var cons = cantidad;
		document.getElementById('rest').value = cons;
	}
}