
function validateEmail()
{
	var email = document.getElementById("contactEmailTA").value;
	var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
	return re.test(email);
}

function verifyEmail()
{
	if(validateEmail() === false)
	{
	
		document.getElementById("contactEmailTA").style.color = "red";
		return false;
	}
	else{
	document.getElementById("contactEmailTA").style.color = "white";
	
		var email = document.getElementById("contactEmailTA").value;
		var subject = document.getElementById("contactSubjectTA").value;
		var body = document.getElementById("contactBodyTA").value;
		
		
		window.open('mailto:tariqmusica@gmail.com?subject=' & subject &  ';body=' & body);
		
	
	}
}

