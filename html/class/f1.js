// document.getElementById('submitBtn').addEventListener('click', function() {
// 	myValidation();
// }, false);

console.log(document.getElementById('submitBtn'));

function myKeyUpTest() {
	alert(document.getElementById('usr').value);
}

function myValidation()
{
	if(document.getElementById('usr').value==="")
	{
		document.getElementById('error').innerHTML="Enter the username";
		document.getElementById('usr').focus();
		document.location.href = "https://dragonlaw.io";
		return false;
	}
	else if(document.getElementById('pwd').value=="")
	{
		document.getElementById('error').innerHTML="Please Enter password";

		document.getElementById('pwd').focus();
		return false;
	}
	else if(document.getElementById('pwd').value=="")
	{
		document.getElementById('error').innerHTML="Please Enter password";

		document.getElementById('pwd').focus();
		return false;
	}
}