
/********  Variablen **********/
 const btn = document.getElementById("trigBtn");
// const btn = document.body.children[0];                  //Damit macht die Überschrift dass was vorher der Button gemacht hat, wenn er der obere Code deaktiviert ist

/********  Event-Listener **********/
btn.addEventListener("click", onClick);

function onClick()
{
    if(onClick)
    {
        switchClassName("night");
        switchBtnTxt("Night");
    }else 
    {
        switchClassName("day");
        switchBtnTxt("Day");
    }
    
}

function onRollIn()
{
    output("onRollIn");
}

function onRollout()
{
    output("onRollout");
}

function calculate()                                       //Funktioniert
{

const one = parseInt(prompt("Bitte Zahl eingeben:"));
const two = parseInt(prompt("Bitte Zahl eingeben:"));

const three = one + two;

output(three);
    
}


/********  Business-Logic | Toggle **********/



/********  Änderung in View-Schicht **********/
// Modul: Umschaltung Klassennamen
// switchClassName("night");
// switchClassName("day");
// switchClassName("day");
function switchClassName(modeStr) 
{
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;     
    document.body.children[1].className = modeStr;    
}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("night");
// switchBtnTxt("day");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
}    

/* Tools */
function output(outputData) {
    console.log(outputData);
}