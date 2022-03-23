/*
https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
  */

function speakAloud(clickedButton) {
	
/*
var focusedElement = document.activeElement;
var parentElement = focusedElement.parentElement;
var pText = parentElement.getElementsByTagName('p').innerHTML;
*/
//singingTipsElement
var value = clickedButton.innerHTML;
var parentEl = clickedButton.parentElement;
var childEl = parentEl.getElementsByTagName('p');
if(value === "🗣")
{
  clickedButton.innerHTML = "||";
  var appendedText = "";
  for(var i = 0; i < childEl.length; i++)
  {
	   appendedText = appendedText + childEl[i].innerHTML +'\n';
  }
  console.log("I am "+ appendedText);
  var testText = appendedText;
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'en-US';
  utter.pitch = 6;
  utter.text = testText;
  utter.volume = 0.5;

  // speak
  window.speechSynthesis.speak(utter);    
  //console.log(list.value);
  }

  if(value === "||")
  {
    console.log("innerHTML: " + value);
    clickedButton.innerHTML = "🗣";
    addEventListener('pause', event => { })

  }
}
//🗣

 
