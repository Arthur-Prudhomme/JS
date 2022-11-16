let matchesTotal
let matchesCurrent

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function getInput(){
    let matchesTotal = document.getElementById("gameLenght").value;
    if(containsOnlyNumbers(matchesTotal) === true){
        parseInt(matchesTotal);
        if(matchesTotal < 1){
            document.getElementById("totalMatchesOutput").innerHTML = "Veuillez entrer un nombre supérieur à 0";
        }else{
            document.getElementById("nextMove").type = 'number';
            document.getElementById("confirmNextMove").hidden = '';

            matchesCurrent = matchesTotal;

            document.getElementById("totalMatchesOutput").innerHTML = "Taille de la partie : " + matchesTotal + " allumettes";
            document.getElementById("currentMatchesOutput").innerHTML = "Nombre restant : " + matchesTotal + " allumettes";

            createMatches(matchesCurrent);
        }
    }else{
        document.getElementById("totalMatchesOutput").innerHTML = "Veuillez entrer un nombre";
    }
}

function createMatches(int){
    let container = document.getElementById("matchesContainer");
    let check = document.querySelectorAll(`[id="matches"]`);
    if(check){
        check.forEach(content => content.remove())
    }
    for(i = int; i > 0; i--){
        let box = document.createElement("div");
        box.id = "matches";
        container.appendChild(box);
    }
}