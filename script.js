// const players = ["John", "Bob", "Alice", "Poppy"];

// const person = {
//   name: "John Doe",
//   age: 80,
// };

// // Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// window.players = players;
// window.person = person;
// window.team = team;
// window.team1 = team1;
// window.cap1 = cap1;
function updateTimer() {
	var currenttime = new Date();
	var day  =currenttime.getDate();
	var month = currenttime.getMonth();
	var year  =currenttime.getFullYear();
	// timing
	var hr = currenttime.getHours();
	var min  = currenttime.getMinutes();
	var sec = currenttime.getSeconds();
	var timeText = `${day}/${month}/${year}, ${hr}:${min}:${sec}`;
	document.getElementById("timer").textContent = timeText;
}
setInterval(()=>{updateTimer()},1000);
