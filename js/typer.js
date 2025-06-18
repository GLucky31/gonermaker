var i = 0; /* The index of the current letter being typed out. This is set to 0 at the start of the script. */
var txt = 0; /* The text to be displayed in the typewriter effect. This is set by the switcher function. */
var line = 0; /* The current line to display */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var cont; /* This is a boolean that checks if the current line has a <br> tag at the end. If it does, it will add a <br> tag to the end of the text. */
var initial; /* This is a boolean that checks if the current line is the first line of the paragraph. If it is, it will clear the typeout div before typing out the text. */
var eventer;
function fadeInBackground() {
  document.getElementById("background").classList.add("active");
}
function switcher(){
switch(line) { /*DIALOGUE SWITCH CASES idk if this is effective, but I thought of it at the time. It's been a long assss time since I scripted lowkey.*/
  case 0:
    txt = "ARE YOU";
    cont = true;
    initial = true;
    eventer = false;
    break;
case 1:
    txt = "THERE?";
    cont = false;
    initial = false;
    eventer = false;
    break;
  case 2:
    txt = "ARE WE";
    cont = true;
    initial = true;
    eventer = false;
    break;
case 3:
    txt = "CONNECTED?";
    cont = false;
    initial = false;
    break;
    case 4:
    txt = "EXCELLENT.";
    cont = false;
    initial = true;
    
    break;
    case 5:
    txt = "TRULY";
    cont = true;
    initial = true;
    fadeInBackground();
    break;
case 6:
    txt = "EXCELLENT.";
    cont = false;
    initial = false;
    break;
    case 7:
    txt = "NOW.";
    cont = false;
    initial = true;
    break;
case 8:
    txt = "WE MAY";
    cont = true;
    initial = true;
    break;
    case 9:
    txt = "BEGIN.";
    cont = false;
    initial = false;
    break;
    case 10:
    txt = "FIRST.";
    cont = false;
    initial = true;
    break;
    case 11:
    txt = "YOU MUST DESCRIBE";
    cont = true;
    initial = true;
    break;
    case 12:
    txt = "THE VESSEL.";
    cont = false;
    initial = false;
    break;
}}
switcher(); /*The first call to the switcher function sets the initial line of text to be displayed.*/
function typeWriter() { /*This function types out the text. It gets called recursively. THIS COMMENT CHAIN IS RLY IMPORTANT CAUSE MY ASS WILL FORGET THIS STUFF*/
if (i < txt.length) { /*Checks if the text has been typed out yet. The i var is the place of the current text.*/
    document.getElementById("typeout").innerHTML += txt.charAt(i); /*Adds current letter to the display string in the innerHTML.*/
    i++; /*This moves to the next letter.*/
    setTimeout(typeWriter, speed); /*Sets a timer for 50ms to call on the function again.*/
  }
else if(cont == true) { /*If the text has indeed been finished, it checks here if there's another line of text in the paragraph to set a <br> tag.*/
        document.getElementById("typeout").innerHTML += "<br>";
        line++; /*Next two lines set the switch case to be the next dialogue line.*/
        switcher();
        i = 0; /*Resets the letter counter to 0.*/
        /*setTimeout(typeWriter, speed);*/
  }
else{ /*If the current line is the last line in the paragraph aka did not pass the first two checks, it continues to the next dialogue line switch case and ends the function + resets the symbol counter.*/
    line++;
    switcher();
    i = 0;
    return;
}
}

function eventDisplayer() { /*This function is gonna be called when the typewriter effect is called. It checks if the current line has an even attributed to it, such as displaying new html or such. More switch cases yayy.*/

}

function interacter() { /*This is the part called with the button. It checks if the current line has finished typing, if we are not out of dialogue switch cases.*/
	        autoplay = document.getElementById('audioplay')
	        promise = autoplay.play()
    if(i==0 && line<13){
        if(initial==true){ 
    document.getElementById('typeout').innerHTML=''; /*If the next line is the first line, clear the typeout div.*/
} typeWriter(); /*This calls the typewriter function if it passes the checks.*/

}} 
document
  .addEventListener(
    'keydown', function(e){
        if(`${e.code}`=='Enter'){
interacter();
        }

        } /*This calls the interacter function when the user presses a key. This is for the typewriter effect to be called with a keypress.*/
    )
