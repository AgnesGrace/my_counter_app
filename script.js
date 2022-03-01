/*let count = 0;
let countForMe = document.getElementById("countme");
function increment() {
	count = count + 1
	countForMe.innerHTML = count;
	console.log(count);
}
increment();*/
/*let lap1 = 4;
let lap2 = 10;
let lap3 = 9;

function lap() {
	console.log(lap1+lap2+lap3)
}
lap();*/


/*function laps() {
	for(let lapsCompleted = 0; lapsCompleted<4; lapsCompleted++ ){
		console.log(lapsCompleted)
	}

}
laps();*/


let count = 0;
let countMe = document.getElementById("countme");

saveMe = document.getElementById("save-el");
console.log(saveMe);

function increment(event) {
	count += 1
	countMe.textContent = count;
	
}


function save() {
	let saveCount = count +"-"
	saveMe.textContent += saveCount;
	/*kindly return to the initial count which is 0*/
	reset = document.getElementById("countme")
	reset.textContent = 0;
	count = 0;

}
/*queryseclectors for the clicks*/
document.querySelector("#increment\-btn")
	.addEventListener("click", increment);

document.querySelector("#save\-btn")
	.addEventListener("click", save);

