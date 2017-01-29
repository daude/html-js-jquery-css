function validform()
{
	if(document.geElementById('').value=="")
	{
		document.geElementById('error').innerHTML="please Enter UserName";
		document.geElementById('user').focus();
		return false;
		}
		else if(document.geElementById('password').value="")
		{
			document.geElementById('error').innerHTML="please Enter password";
			document.geElementById('password').focus();
		}
}