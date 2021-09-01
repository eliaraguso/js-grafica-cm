// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.


// Chiedo all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
let totaleCelle = parseInt(prompt("Inserisci il numero di celle che andranno a formare il campo da gioco in modo che sia sempre una scacchiera quadrata. Il valore dev'essere compreso tra 4 e 100 e gli unici valori consentiti corrispondo al quadrato del numero di celle o colonne di cui sarà composto il campo (4, 9, 16, 25, 36, 49, 64, 81, 100)"));

// definisco una variabile di controllo per la forma della scacchiera (deve essere un quadrato)
let totaleRighe = Math.sqrt(totaleCelle);

// verifico che l'input utente sia un numero e
while (isNaN(totaleCelle)) {
    totaleCelle = parseInt(prompt("Ti ho detto di inserire un numero!!!!"));
}

// che sia compreso tra 4 e 100
while (totaleCelle < 4 || totaleCelle >100) {
    totaleCelle = parseInt(prompt("Ti ho detto di inserire un numero tra 4 e 100 !!!!"));
}

// e che sia sempre il quadrato del numero di righe o colonne così da formare sempre una scacchiera quadrata (DA COMPLETARE)
// while (totaleRighe !== Number.isInteger(totaleRighe) ) {
//     totaleCelle = parseInt(prompt("Ti ho detto di inserire un numero tra 10 e 100 che faccia parte di questo insieme di numeri (4, 9, 16, 25, 36, 49, 64, 81, 100)!!!!"));
// }




for (let i = 1; i <= totaleCelle; i++){
  document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`;
}

document.getElementById("campo").addEventListener("click",
    function(event){
        event.target.classList.add("cliccato");
        alert(event.target.innerHTML);
    }
)






