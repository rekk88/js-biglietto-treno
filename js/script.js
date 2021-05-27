// console.log("console !");
// document.getElementById("visualizza").innerHTML="sono uno script"



//input
var km = parseInt(prompt("inserisci i km : "));
console.log(km);

var età = parseInt(prompt("inserisci l'età : "));
console.log(età);

//calcolo prezzo
var prezzo = km * 0.21 ; 
console.log("prezzo : " + prezzo); //visualizzazione prezzo senza sconto
document.getElementById("prezzo").innerHTML="Prezzo : " + prezzo.toFixed(2) + "€";

if(età < 18){
    prezzo = prezzo - (prezzo * 0.2); //sconto del 20%  prezzo -= prezzo * 0.2 --> forma abbreviata
    document.getElementById("sconto").innerHTML="sconto 20%";
}
else if(età > 65){
            prezzo = prezzo - (prezzo * 0.4); //sconto del 40%
            document.getElementById("sconto").innerHTML="sconto 40%";
        }
     else{
         document.getElementById("sconto").innerHTML="niente sconto per te ....hahahah";
     }

console.log("prezzo finale : " + prezzo);
console.log("prezzo finale 2 decimali : " + prezzo.toFixed(2));

document.getElementById("visualizza").innerHTML="Totale : " + prezzo.toFixed(2) + "€"; 
