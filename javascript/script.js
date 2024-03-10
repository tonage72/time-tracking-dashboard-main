const navDailyButton = document.querySelector('.nav-daily');
const navWeeklyButton = document.querySelector('.nav-weekly');
const navMonthlyButton = document.querySelector('.nav-monthly');

const statsDaily = document.querySelectorAll('.stats-daily');
const statsWeekly = document.querySelectorAll('.stats-weekly');
const statsMonthly = document.querySelectorAll('.stats-monthly');

navDailyButton.addEventListener("click", displayDailyStats);
navWeeklyButton.addEventListener("click", displayWeeklyStats);
navMonthlyButton.addEventListener("click", displayMonthlyStats);

const hoursDailyCurrent = document.querySelectorAll('.hours-daily-current');
const hoursWeeklyCurrent = document.querySelectorAll('.hours-weekly-current');
const hoursMonthlyCurrent = document.querySelectorAll('.hours-monthly-current');

const hoursDailyPrevious = document.querySelectorAll('.hours-daily-previous');
const hoursWeeklyPrevious = document.querySelectorAll('.hours-weekly-previous');
const hoursMonthlyPrevious = document.querySelectorAll('.hours-monthly-previous');

function fetchJSON(navSelection) {
	fetch('../data.json')
		.then(res => {
			return res.json();
		})
		.then(data => {
			switch (navSelection) {
				case 'daily':
					let d = 0;
					while (d < data.length) {
						hoursDailyCurrent[d].textContent = hourDetermination(data[d].timeframes.daily.current);
						hoursDailyPrevious[d].textContent = "Previous - " + hourDetermination(data[d].timeframes.daily.previous);
						d++;
					}
					break
				case 'weekly':
					let w = 0;
					while (w < data.length) {
						hoursWeeklyCurrent[w].textContent = hourDetermination(data[w].timeframes.weekly.current);
						hoursWeeklyPrevious[w].textContent = "Previous - " + hourDetermination(data[w].timeframes.weekly.previous);
						w++;
					}
					break
				case 'monthly':
					let m = 0;
					while (m < data.length) {
						hoursMonthlyCurrent[m].textContent = hourDetermination(data[m].timeframes.monthly.current);
						hoursMonthlyPrevious[m].textContent = "Previous - " + hourDetermination(data[m].timeframes.monthly.previous);
						m++;
					}
					break
			}
		})
}

function hourDetermination(hours) {
	if (hours == 1) {
		return hours + "hr";
	} else {
		return hours + "hrs";
	}
}

function displayDailyStats() {

	navDailyButton.style.color = "hsl(236, 100%, 87%)";
	navWeeklyButton.style.color = "hsl(235, 45%, 61%)";
	navMonthlyButton.style.color = "hsl(235, 45%, 61%)";

	statsDaily.forEach(span => {
		span.style.display = "flex";

		fetchJSON('daily');

	});
	statsWeekly.forEach(span => {
		span.style.display = "none";
	});
	statsMonthly.forEach(span => {
		span.style.display = "none";
	});
}

function displayWeeklyStats() {

	navDailyButton.style.color = "hsl(235, 45%, 61%)";
	navWeeklyButton.style.color = "hsl(236, 100%, 87%)";
	navMonthlyButton.style.color = "hsl(235, 45%, 61%)";

	statsDaily.forEach(span => {
		span.style.display = "none";
	});
	statsWeekly.forEach(span => {
		span.style.display = "flex";

		fetchJSON('weekly');

	});
	statsMonthly.forEach(span => {
		span.style.display = "none";
	});
}

function displayMonthlyStats() {
	
	navDailyButton.style.color = "hsl(235, 45%, 61%)";
	navWeeklyButton.style.color = "hsl(235, 45%, 61%)";
	navMonthlyButton.style.color = "hsl(236, 100%, 87%)";

	statsDaily.forEach(span => {
		span.style.display = "none";
	});
	statsWeekly.forEach(span => {
		span.style.display = "none";
	});
	statsMonthly.forEach(span => {
		span.style.display = "flex";

		fetchJSON('monthly');

	});
}

displayDailyStats();