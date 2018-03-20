const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();

  const hoursDegrees = calcDegrees(now.getHours(), 12);
  const minuteDegrees = calcDegrees(now.getMinutes(), 60);
  const secondsDegrees = calcDegrees(now.getSeconds(), 60);

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	fixGlitch(secondsDegrees);
}

let calcDegrees = (timeUnit, val) => {
	return timeUnit / val * 360 + 90;
};

//function to fix the glitch at 90 degrees
let fixGlitch = time => {
	allHands.forEach((hand) => {
	  	if (time === 90) {
	    	hand.style.transition = 'none';
	  	} else {
	    	hand.style.transition = '';
	  	}
		});
	};

setInterval(setDate, 1000);
