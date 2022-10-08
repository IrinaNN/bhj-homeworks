let countdownTimer = 0; 
let i = 59; 

function countdown() {
	document.getElementById("timer").innerHTML = i;
	i--; 
	if (i<0) {
		clearTimeout(countdownTimer);
		alert('Вы победили в конкурсе')
	} 
	else {
		countdownTimer = setTimeout(countdown, 1000)
	}
}

countdown();