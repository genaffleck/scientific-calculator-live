document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is Ready");
    const display = document.getElementById("calc-display");
    const buttons = document.getElementsByClassName("btn");

    let currentValue = "";
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener("click", function () {
            console.log("button clicked", button.innerText);
            const value = button.innerText;

            function evaluateResult(){
                convertedValue = currentValue.replace("×", "*").replace("÷", "/").replace("%","*0.01")
                const result = eval(convertedValue);
                currentValue = result.toString();
                display.value = currentValue;
            }

            if (value == "AC") {
                currentValue="";
                display.value = currentValue;
            }
            else if(value == "="){
                evaluateResult();
            } 
            else {
                currentValue += value;
                display.value = currentValue;
            }
        })
    }
})

