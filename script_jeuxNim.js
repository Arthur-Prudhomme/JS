let matchesTotal = getElementWithId("gameLenght")
let nextMove = getElementWithId("nextMove")
let matchesCurrent
let player

matchesTotal.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("gameLenghtButton").click();
    }
});

nextMove.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("confirmNextMove").click();
    }
});

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function getElementWithId(id){
    return document.getElementById(id)
}

function getInput(){
    let matchesTotalValue = matchesTotal.value;
    console.log(matchesTotalValue)
    if(containsOnlyNumbers(matchesTotalValue) === true){
        parseInt(matchesTotalValue);
        if(matchesTotalValue < 1){
            getElementWithId("totalMatchesOutput").innerHTML = "Veuillez entrer un nombre supérieur à 0";
        }else{
            player = 1

            nextMove.type = 'number';
            nextMove.value = 0;

            getElementWithId("confirmNextMove").hidden = '';

            matchesCurrent = matchesTotalValue;

            getElementWithId("totalMatchesOutput").innerHTML = "Taille de la partie : " + matchesTotalValue + " allumettes";
            getElementWithId("currentMatchesOutput").innerHTML = "Nombre restant : " + matchesCurrent + " allumettes";

            createMatches(matchesCurrent);
            getElementWithId("playerTurn").innerHTML = "C'est à Joueur " + player
        }
    }else{
        getElementWithId("totalMatchesOutput").innerHTML = "Veuillez entrer un nombre";
    }
}

function createMatches(number){
    let container = getElementWithId("matchesContainer");
    let check = document.querySelectorAll(`[id="matches"]`);
    if(check){
        check.forEach(element => element.remove())
    }
    for(i = number; i > 0; i--){
        let box = document.createElement("div");
        box.id = "matches";
        container.appendChild(box);
    }
}

function removeMatches(){
    let number = nextMove.value;
    if(containsOnlyNumbers(number) === true){
        parseInt(number);
        if(number > 0 && number < 4){
            getElementWithId("inputError").innerHTML = '';
            matchesCurrent -= number;
            if(matchesCurrent <= 0){
                let destroy = document.querySelectorAll(`[id="matches"]`);
                matchesCurrent = 0
                if(destroy){
                    destroy.forEach(element => element.remove())
                }
                getElementWithId("playerTurn").innerHTML = "Joueur " + player + " a perdu"
            }else{
                for(i = number; i > 0; i--){
                    getElementWithId('matches').remove()
                }
                turns()
                getElementWithId("playerTurn").innerHTML = "C'est à Joueur " + player
            }
            getElementWithId("currentMatchesOutput").innerHTML = "Nombre restant : " + matchesCurrent + " allumettes";
        }else{
            getElementWithId("inputError").innerHTML = 'Veuillez entrer un nombre compris entre 0 et 3';
        }
    }
}

function turns(){
    if(player == 1){
        player = 2
    }else{
        player = 1
    }
}