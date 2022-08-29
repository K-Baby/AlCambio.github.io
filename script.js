function points() {
	let wl = document.getElementById('result').value;
	let person = document.getElementById('punt1').value;
	let comput = document.getElementById('punt2').value;
	if (wl == 'Win') {
		person++;
		document.getElementById('punt1').value = person;
		moves();
	} else if (wl == 'Loss') {
		comput++;
		document.getElementById('punt2').value = comput;
		moves();
	} 	
}

function moves() {
	let cant1 = document.getElementById('punt1').value;
	let cant2 = document.getElementById('punt2').value;
	if (cant1 == 10 ) {
		window.alert('Has Ganado');
		let div = document.createElement('div');
		div.innerHTML = 'Jugador ' + cant1 + ' vs Computador ' + cant2;
		document.getElementById('lastRes').appendChild(div);
		cant1 = 0;
		document.getElementById('punt1').value = cant1;
		cant2 = 0;
		document.getElementById('punt2').value = cant2;
	} else if (cant2 == 10) {
		window.alert('Has Perdido');
		let div = document.createElement('div');
		div.innerHTML = 'Jugador ' + cant1 + ' vs Computador ' + cant2;
		document.getElementById('lastRes').appendChild(div);
		/*document.getElementById('lastRes').innerHTML = 'Jugador ' + cant1 + ' vs Computador ' + cant2;*/
		cant2 = 0;
		document.getElementById('punt2').value = cant2;
		cant1 = 0;
		document.getElementById('punt1').value = cant1;
	}
}

function Piedra() {
	let rock = document.getElementById('elec1').value;
	let wl = document.getElementById('result').value;
	let elecpc = document.getElementById('elecpc').value;
	let random = Math.round(Math.random()*100);
	if (random <= 33) {
		elecpc = 'Piedra';
		wl = 'Draw';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
		points();
	} else if (random > 33 && random <=67) {
		elecpc = 'Papel';
		wl = 'Loss';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
		points();
	} else if (random >67) {
		elecpc = 'Tijeras';
		wl = 'Win';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
		points();
	}
}

function Papel() {
	let rock = document.getElementById('elec1').value;
	let wl = document.getElementById('result').value;
	let elecpc = document.getElementById('elecpc').value;
	let random = Math.round(Math.random()*100);
	if (random <= 33) {
		elecpc = 'Piedra';
		wl = 'Win';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
		points();
	} else if (random > 33 && random <=67) {
		elecpc = 'Papel';
		wl = 'Draw';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
	} else if (random >67) {
		elecpc = 'Tijeras';
		wl = 'Loss';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
		points();
	}
}

function Tijera() {
	let rock = document.getElementById('elec1').value;
	let wl = document.getElementById('result').value;
	let elecpc = document.getElementById('elecpc').value;
	let random = Math.round(Math.random()*100);
	if (random <= 33) {
		elecpc = 'Piedra';
		wl = 'Loss';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
		points();
	} else if (random > 33 && random <=67) {
		elecpc = 'Papel';
		wl = 'Win';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
		points();
	} else if (random >67) {
		elecpc = 'Tijeras';
		wl = 'Draw';
		document.getElementById('elecpc').value = elecpc;
		document.getElementById('result').value = wl;
	}
}
window.addEventListener("load",function(){ 
document.getElementById("play").addEventListener("click",sonarPajaros); 
document.getElementById("stop").addEventListener("click",callarPajaros);
	}); 
function sonarPajaros(){ 
var sonido = document.createElement("iframe"); 
sonido.setAttribute("src","audio/Heat Waves.mp3"); 
document.body.appendChild(sonido); 
document.getElementById("play").removeEventListener("click",sonarPajaros); 
	} 
function callarPajaros(){ 
var iframe = document.getElementsByTagName("iframe"); 
if (iframe.length > 0){ 
	iframe[0].parentNode.removeChild(iframe[0]); 
document.getElementById("play").addEventListener("click",sonarPajaros); 
	} 
}
