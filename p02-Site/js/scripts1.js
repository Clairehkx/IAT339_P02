var myButton = document.getElementById('submitbtn');
var myOutput = document.getElementById('output');
var addCartBtn = document.getElementById('addCartBtn');
var favBtn = document.getElementById('favBtn');

var btnClick = function(){
	alert("Thanks for your submission!");
	//window.location.href='index.html';
};

myButton.addEventListener("click", btnClick);

function checkoutConfirm() { 
	alert("Added to cart!");
	if (window.confirm('Process to checkout?')){
		window.location.href = "cart.html"
	}else{
		
	}
}

addCartBtn.addEventListener("click", checkoutConfirm);


function favConfirm() { 
	alert("Added to favourite!");
	if (window.confirm('Check it in your personal page?')){
		window.location.href = "loggedin.html"
	}else{
		
	}
}

favBtn.addEventListener("click", favConfirm);