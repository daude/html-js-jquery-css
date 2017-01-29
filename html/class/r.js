function displayMessage(message,id,co)
{
  document.getElementById(id).innerHTML=message;
  document.getElementById(id).style.color=co;
}
function validateName()
  {
        var name = document.getElementById('uName').value;
          if(name.length==0)
      {
         displayMessage("Enter username..","msgName","red");
      			return false;
        }
         else if(!name.match(/^[a-zA-Z]{3,10}[\s]{1}[a-zA-Z]{4,10}$/))
      	{
              displayMessage("Invalid..first name and last name must include","msgName","red");
      	   return false;
      	}
              else
      		{
      			displayMessage("Valid!!","msgName","green");
      			return true;
      		}
      }

      function validateEmail()
      {
      	var email = document.getElementById('gomja').value;

      	if(email.length==0)
      	{
      		displayMessage("Enter email..","msgEmail","red");
      		return false;
      	}

      	else if(email.match(/^[a-zA-Z\-\_\.0-9]*\@{1}[a-z]{4,10}*\.{1}[a-z]{2,9}$/))
      	{
      		displayMessage("valid email","msgEmail","green");
      		return false;
      	}
      	else
      	{
      		displayMessage("Invalid email","msgEmail","red");
      		return true;
      	}
      }

      function validatecountryCode()
      {
            var con = document.getElementById('country');

            if(con.value=="America")
            {
                  document.getElementById('code').value="+01";
                              }

            else if(con.value=="Nepal")
            {
               document.getElementById('code').value="+977";  
            }
      }


      function validate()
      {
      	if(validateName() && validateEmail() && validatecountryCode())
      	{
      		document.location.href = "https://dragonlaw.io";
      		return true;
      	}
      }