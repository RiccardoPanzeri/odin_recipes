function mostraIngredienti(idElemento){
    var listaIngredienti = document.getElementById(idElemento); //ottengo l'elemento tramite l'id assegnatogli, passandolo come parametro al metodo getElementById;
    listaIngredienti.classList.toggle("nascondi"); //attivo/disattivo la classe ''nascondi";
    console.log("chiamata"); //log a scopo di debug e per testare la console tramite browser.

}