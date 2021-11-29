
/********  Variablen **********/
 const btn = document.getElementById("trigBtn");
// const btn = document.body.children[0];                  //Damit macht die Überschrift dass was vorher der Button gemacht hat, wenn er der obere Code deaktiviert ist

/********  Event-Listener **********/
btn.addEventListener("click", calculate);
btn.addEventListener("mouseenter", onRollIn);
btn.addEventListener("mouseenter", onRollout);


function test()
{
    output("Hi");
}

function onRollIn()
{
    output("onRollIn");
}

function onRollout()
{
    output("onRollout");
}

function calculate()
{

const one = parseInt(prompt("Bitte Zahl eingeben:"));
const two = parseInt(prompt("Bitte Zahl eingeben:"));

const three = one + two;

output(three);
    
}


/********  Business-Logic | Toggle **********/



/********  Änderung in View-Schicht **********/



/* Tools */
function output(outputData) {
    console.log(outputData);
}