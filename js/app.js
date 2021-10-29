// UI

const panel = document.getElementById("panel");
const ratingcontainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendbtn = document.getElementById("send");
const message = document.getElementById("message");

let selectedrating = "satisfied";

let messagereview = "We love your service";

message.addEventListener("input",()=>{
	// console.log(message.value);
	messagereview = message.value;
});


ratingcontainer.addEventListener("click",(e)=>{
	// console.log(e.target);


	if(e.target.parentNode.classList.contains("rating")){

		removeactive();

		e.target.parentNode.classList.add("active");

		selectedrating = e.target.parentNode.lastElementChild.textContent ;

	}else if(e.target.classList.contains("rating")){

		removeactive();

		e.target.classList.add("active");

		selectedrating = e.target.lastElementChild.textContent; 
	}
});

function removeactive(){
	for(let i=0; i < ratings.length; i++){
		ratings[i].classList.remove("active");
	}
}




sendbtn.addEventListener("click",()=>{
	// console.log("hay");

	

	panel.innerHTML = ` 
		<div class="header"><p>feedback</p>
		<i class="fas fa-times"></i>
		</div>
		<strong>Your feedback help us to improve</strong>
		<p style="text-align:center">Thank you for your feedback. <br/>We will try our best to make perfect service</p>
		<p>Rating : ${selectedrating}</p>
		<p>Message : ${messagereview}</p>

		`;
});

