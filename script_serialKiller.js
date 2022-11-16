class Survivor{
    constructor(name,stats){
        this.name = name;
        this.stats = stats;
    }
}

class Stats{
    constructor(role,deathP,dodgeP,dodgeDeathP){
        this.role = role;
        this.deathP = deathP;
        this.dodgeP = dodgeP;
        this.dodgeDeathP = dodgeDeathP;
    }
}

class Killer{
    constructor(name,health){
        this.name = name;
        this.health = health;
    }
}

let names = ['Brandon','Jessica','Mike','Amanda','Mickey','Jack','Laurie','Regan','Ben'];
let roles = ['The Scholar','The Final Girl','The Jock','The Bad Girl','The Token','The Cop','The Skeptic','The Hysteric','The Harbinger'];

let killer = new Killer("Michael Myers",100)

function randBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateSurvivor(){
    let deathP = (randBetween(0,10));
    let dodgeP = (randBetween(0,10 - deathP));
    let dodgeDeathP = (10 - (deathP + dodgeP));

    let stats = new Stats(roles[Math.floor(Math.random() * roles.length)],deathP,dodgeP,dodgeDeathP)
    return new Survivor(names[Math.floor(Math.random() * names.length)],stats)
}

let survivors = [];
let saveSurvivors =[];
let graveyard = [];

for(i = 5; i > 0; i--){
    survivors.push(generateSurvivor());
}

survivors.forEach(element => saveSurvivors.push(element));

console.log(saveSurvivors);

while(killer.health > 0 && survivors.length > 0){
    let picker = randBetween(0, survivors.length-1);
    let proba = randBetween(0,10);
    if(proba <= survivors[picker].stats.deathP){
        console.log(survivors[picker].name + " est tué par " + killer.name);
        graveyard.push(survivors[picker].name);
        survivors.splice(picker,1);
        continue
    }else{
        if(proba <= survivors[picker].stats.dodgeP){
            killer.health -= 10;
            console.log(survivors[picker].name + " esquive l'attaque de " + killer.name + " et lui enlève 10HP");
            continue
        }else{
            killer.health -= 15;
            console.log(survivors[picker].name + " est tué par " + killer.name + " mais dans sa mort lui enlève 15HP");
            graveyard.push(survivors[picker].name);
            survivors.splice(picker,1);
            continue
        }
    }
}
if(killer.health <= 0){
    if(survivors.length <= 0){
        console.log("Les survivants sont tous mort cependant avant de mourir " + graveyard[graveyard.length-1] + " emporte " + killer.name + " dans la tombe");
    }else{
        if(graveyard.length == 0){
            console.log("Les survivants ont réussi à tuer " + killer.name + " et aucun d'eux n'est mort");
        }else{
            console.log("Les survivants ont réussi à tuer " + killer.name);
            console.log("Honorons la mémoire de " + graveyard);
        }
    }
}else{
    console.log(killer.name + " a tué tout les survivants et avait " + killer.health + "HP restant");
}