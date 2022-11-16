class Customer{
    constructor(name,sanity){
        this.name = name;
        this.sanity = sanity;
    }
}

let customer = new Customer("John", 10)
let music = ['Anissa - Wejdene','Where We Belong - Shayfer James','Nightside of Siberia - Powerwolf','Long Live the King - Sabaton','Zenith - Ghost'];

function randBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let trafficLight = 30;
let nbTaxi = 0;

while(trafficLight > 0 && customer.sanity > 0){
    let picker = music[randBetween(0,music.length-1)];
    console.log(picker + " passe à la radio");
    if(picker == music[0]){
        console.log(customer.name + " fou de rage de l'entendre sort du taxi et en commmande un autre");
        customer.sanity = customer.sanity -1
        console.log(customer.name + " perd 1 de santé mentale, il lui reste : " + customer.sanity);
        nbTaxi = nbTaxi +1
    }
    trafficLight = trafficLight -1
}
if(trafficLight == 0){
    console.log(customer.name + " est arrivé sain et sauf avec " + customer.sanity + " de santé mentale");
}else{
    console.log(customer.name + " a explosé");
}
console.log(customer.name + " a changé " + nbTaxi + " fois de taxi")