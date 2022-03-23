
function detectButtonClick(){
	var clickedButton = document.getElementById('button').onclick;
	var text = clickedButton.innerHTML;

	if(text === "||")
	{
		console.log("innerHTML: " + text);
	}
}

function showButton(thisButton){
  
  // If selected element is hidden
  //if (thisButton.style.visibility !== "hidden") {
  
    // Show the hidden element
    thisButton.style.display = "block";    
		console.log("onmouseover");
  //}
}

function hideButton(thisButton){
  
  // If selected element is hidden
  //if (thisButton.style.visibility !== "visible") {
  
    // Show the hidden element
    thisButton.style.display = "none";    
	console.log("onmouseleave");
  //}
}

function animateButton(thisButton){
	thisButton.style.transition = "height 1s, background-color 1s";
	thisButton.style.height = "40px";
	thisButton.style.backgroundColor = "#4AD7D1";
	
	
}
function defaultButton(thisButton){
	thisButton.style.transition = "height 1s, background-color 1s";
	thisButton.style.height = "25px";
	thisButton.style.backgroundColor = "transparent";
}

