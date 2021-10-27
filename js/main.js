//generare 5 numeri casuali e inserirli in un array
//mostrare i numeri in un alert
//far partire un timer da 30 secondi
//chiedere tramite un prompt di inserire i numeri
//confrontare i numeri con l'array originale 


const numeri = [];
let arrayNumeriInseriti = [];

for (i = 0; i < 5; i++) {
    numeri.push(randomNum());
}

alert(numeri);


window.setTimeout(myPromt, 30000);

function myPromt() {
    const numeriInseriti = prompt("Inserisci i numeri separati da uno spazio");
    arrayNumeriInseriti = numeriInseriti.split(" ");
    for (k = 0; k < arrayNumeriInseriti.length; k++) {
        arrayNumeriInseriti[k] = parseInt(arrayNumeriInseriti[k]);
    }

    let result = numeri.every(function (element) {
        debugger;
        return arrayNumeriInseriti.includes(element);
    });
    if (result) {
        alert("Complimenti hai vinto");
    } else {
        alert("Mi dispiace devi migliorare la tua memoria");
    }
}














function randomNum() {
    num = Math.floor(Math.random() * 100);
    return num;
}

