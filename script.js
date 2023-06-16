function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var equation = document.getElementById("result").value;
    var answer = eval(equation);
    document.getElementById("result").value = answer;
}