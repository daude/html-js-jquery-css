function validForm()
{
	if(document.getElementById('usr').value=="")
	{
		document.getElementById('error').innerHTML="Please Enter username";
		
		document.getElementById('usr').focus();
		return false;
	}

	else if(document.getElementById('pwd').value=="")
	{
		document.getElementById('error').innerHTML="Please Enter password";

		document.getElementById('pwd').focus();
		return false;
	}
	else if(document.getElementById('pwd').value.length<6)
	{
		document.getElementById('error').innerHTML="password must be 6 characters";

		document.getElementById('pwd').select();
		return false;
	}
	else if(document.getElementById('cpwd').value==="")

	{
		document.getElementById('error').innerHTML="password length do not match";

		document.getElementById('cpwd').focus();
		return false;
	}if(document.getElementById('cpwd').value!=document.getElementById('pwd').value)
	{
		document.getElementById('error').innerHTML="password do not match";

		document.getElementById('cpwd').focus();
		return false;
	}
	else if(document.getElementById('eml').value==="")
	{
		document.getElementById('error').innerHTML = "Enter the email address";
		document.getElementById('eml').focus();
		return false;
	}
	else if(document.getElementById('phn')=="")
	{
		document.getElementById('error').innerHTML="Please Enter the phone number";
		document.getElementById('phn').focus();
		return false;
	}
	else if(document.getElementById('phn').value.length!=10)
	{
document.getElementById('error').innerHTML="phone numbermust be 10 characters";
document.getElementById('phn').select();
return false;

	}
	else if(document.getElementById('phn').value.substr(0,2)!=98)
	{
		document.getElementById('error').innerHTML = "phone number should be start";
		document.getElementById('phn').select();
		return false;
	}
	else if(isNaN(document.getElementById('phn').value))
	{
		document.getElementById('error').innerHTML ="please enter nmber";
		document.getElementById('phn').select();
		return false;
		
	}

	else if(document.getElementById('con').value==="default")
	{
		document.getElementById('error').innerHTML="Please Select a Country";

		//document.getElementById('cpwd').focus();
		return false;
	}

	else
	{
		document.getElementById('error').innerHTML="Submitting Form";
		document.getElementById('error').style.color="green";
		return true;
	}
}