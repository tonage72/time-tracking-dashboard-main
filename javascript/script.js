const navDailyButton = document.querySelector('.nav-daily');
const navWeeklyButton = document.querySelector('.nav-weekly');
const navMonthlyButton = document.querySelector('.nav-monthly');

const statsDaily = document.querySelectorAll('.stats-daily');
const statsWeekly = document.querySelectorAll('.stats-weekly');
const statsMonthly = document.querySelectorAll('.stats-monthly');

navDailyButton.addEventListener("click", displayDailyStats);
navWeeklyButton.addEventListener("click", displayWeeklyStats);
navMonthlyButton.addEventListener("click", displayMonthlyStats);

function displayDailyStats() {

	navDailyButton.style.color = "hsl(236, 100%, 87%)";
	navWeeklyButton.style.color = "hsl(235, 45%, 61%)";
	navMonthlyButton.style.color = "hsl(235, 45%, 61%)";

	statsDaily.forEach(span => {
		span.style.display = "flex";
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
	});
}

displayDailyStats();