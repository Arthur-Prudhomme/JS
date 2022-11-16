function getInput() {
    let match = document.getElementById("myInput").value;
    if(containsOnlyNumbers(match) === true){
        document.getElementById("demo").innerHTML = match + " allumettes";
    }else{
        document.getElementById("demo").innerHTML = "Veuillez rentrer un nombre";
    }
}

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }