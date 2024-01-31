function mostraIngredienti(idElemento){
    var listaIngredienti = document.getElementById(idElemento); //ottengo l'elemento immediatamente successivo al pulsante ( ovvero la lista), e lo inserisco in una variabile;
    listaIngredienti.classList.toggle("nascondi"); //nascondo/mostro la classe ''nascondi";
    console.log("chiamata");

}