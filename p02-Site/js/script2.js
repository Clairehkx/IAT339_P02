var placeOrderBtn = document.getElementById('plcOrder');

function processOrderClick(){
	alert("Your order has been placed!");
	window.location.href='index.html';
}


placeOrderBtn.addEventListener("click", processOrderClick);
