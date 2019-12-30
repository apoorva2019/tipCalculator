document.getElementById("totalTip").style.display = "none";//hide the amount on load
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function(){      //click to call function
	calculateTip();
};



function calculateTip(){
	var billAmt = document.getElementById("billAmt").value;
	var serviceTip = document.getElementById("serviceTip").value;
	var numofPeople = document.getElementById("peopleAmt").value;

	if("billAmt" === "" || serviceTip == 0)
	{
		alert("Please enter values");
		return;
	}
	if(numofPeople === "" || numofPeople<=1)
	{
		numofPeople = 1;
		document.getElementById("each").style.display = "none";
	}
	else{
		document.getElementById("each").style.display = "block";
		}

		var total = (billAmt * serviceTip)/numofPeople;
		total = Math.round(total);
		total = total.toFixed(2);
		document.getElementById("totalTip").style.display = "block";
		document.getElementById("tip").innerHTML =  total;
}
