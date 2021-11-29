
/********  Variablen **********/
var btn = document.getElementById("trigBtn");
let setOn = true;


/********  Event-Listener **********/
// Website geladen --> auf (Anfang)-Zustand umschalten
window.addEventListener("load", toggleStatus);

// Klick auf Btn --> Zustand umschalten
btn.addEventListener("click", toggleStatus);


/********  Business-Logic | Toggle **********/
function toggleStatus()
{
    setOn = !setOn;                                       //Dreht die Variable um unspeichert sie wieder in die Variable....Schaltet beim klicken zwischen Dark und Day Mode um. Wichtig!!!!
    updateView();
}


/********  Änderung in View-Schicht **********/
// Modul: Update der View-Schicht
function updateView()
{
   
    if (setOn) {
        switchClassName("night");
        switchBtnTxt("Day");
        
    } else {
        switchClassName("day");
        switchBtnTxt("Night");
        
    }
    
}


// Modul: Umschaltung Klassennamen
// switchClassName("night");
// switchClassName("day");
// switchClassName("day");
function switchClassName(modeStr) 
{
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;          //Damit greift man auf die unterklassen zu wie in Body dass h1 etc.
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