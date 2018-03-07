var myButton = document.getElementById('submitbtn');
var myOutput = document.getElementById('output');
var addCartBtn = document.getElementById('addCartBtn');
var favBtn = document.getElementById('favBtn');
var placeOrderBtn = document.getElementById('plcOrder');


var btnClick = function(){
	alert("Thanks for your submission!");
	//window.location.href='index.html';
};



myButton.addEventListener("click", btnClick);

function checkoutConfirm() {
	alert("Added to cart!");
	if (window.confirm('Goto your cart?')){
		window.location.href = "cart.html"
	}else{

	}
}

addCartBtn.addEventListener("click", checkoutConfirm);


function favConfirm() {
	alert("Added to favourite!");
	if (window.confirm('Check out your favorites?')){
		window.location.href = "loggedin.html"
	}else{

	}
}

favBtn.addEventListener("click", favConfirm);


function processOrderClick(){
	alert("Your order has been placed!");
	window.location.href='index.html';
}


placeOrderBtn.addEventListener("click", processOrderClick);
