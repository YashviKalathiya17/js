let hours, minutes, seconds, meridian;
var clock = () => {
	const now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
	seconds = now.getSeconds();
	meridian = "AM";

	// convert to 12 hour format
	if (hours >= 12) {
		hours = hours - 12;
		meridian = "PM";
	}

	if (hours === 0) {
		hours = 12;
	}

	// add 0 to single digits
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
};

setInterval(() => {
	clock();
	const showClock = document.getElementById("clock");
	showClock.innerHTML = `${hours}:${minutes}:${seconds} ${meridian}`;
}, 1000);
