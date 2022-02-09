//LIVES CONVENCIONAIS
function liveConventional(){
    const name = document.getElementById("name-conventional").value;
    const checkCelebration = document.getElementById("checkCelebration-conventional").checked;
    const checkCelebrationLink = document.getElementById("checkCelebrationLink-conventional").checked;
    const date = getDate();

    if(checkCelebration === true ){
        result = ("CELEBRAÇÃO IBNA | " + date + " - " + "18H | " + name )
        getResult(result)
    }
    if(checkCelebrationLink === true ){
        result = ("CELEBRA LINK | " + date + " - " + "19H | " + name )
        getResult(result)   
    } 
}



//LIVES CORTES
function liveCut(){
    const name = document.getElementById("name-cut").value
    const message = document.getElementById("message-cut").value
    const result = (message + " - " + name);
    getResult(result);

}

//LIVES SÉRIES
//EM OBRAS - SÉRIE TRATAMENTO DE CHOQUE - PR ISRAEL | CELEBRA LINK
function liveSeries(){
    const name = document.getElementById("name-series").value;
    const message = document.getElementById("message-series").value;
    const select = document.getElementById("series-opt");
    const serie = select.options[select.selectedIndex].text;

    const checkSeriesCut = document.getElementById("check-series").checked;
    
    if(checkSeriesCut === false){
        const date = getDate()
        result = ("SÉRIE " + serie + " | " + date + " - 19H | " +  name)
    }
    if(checkSeriesCut === true){
        result = ("SÉRIE " + serie + " - " + message + " | " +  name)
    }
    


    getResult(result)
}

//LIVES PERSONALIZADA
function liveCustomizing(){
    // const name = document.getElementById("name-customizing").value
    // const name = document.getElementById("name-customizing").value
    // const name = document.getElementById("name-customizing").value
    // const name = document.getElementById("name-customizing").value
    // const name = document.getElementById("name-customizing").value
    

    // CELEBRAÇÃO IBNA - CEIA DO SENHOR | 09/01/2022 - 18H | PR. REINALDO DE SOUZA
    // CANTATA DE NATAL IBNA 2021 | NATAL ESPERANÇA | 19/12/2021 - 19H
    //CELEBRAÇÃO IBNA - BATISMO NAS ÁGUAS E CEIA DO SENHOR | 21/11/2021 - 18H
    //SÉRIE FOCO FORÇA E FÉ - OS MEIOS JUSTIFICAM OS FINS | PR. ISRAEL ALCANTARA
    //SÉRIE FOCO FORÇA E FÉ | 06/11/2021 - 19H | PR. ISRAEL ALCANTARA
    //EM OBRAS - SÉRIE TRATAMENTO DE CHOQUE - PR ISRAEL | CELEBRA LINK
}



//FUNÇÕES GLOBAIS
function getResult(result){
    document.getElementById("result-conventional").innerHTML = result.toUpperCase()     
}

function getDate(){
    const date = new Date();
    const day = String(date.getDate()).padStart(2,'0')
    const month = String(date.getMonth() + 1).padStart(2,'0')
    const year = date.getFullYear();

    currentDate = day + '/' + month + '/' + year;
    return currentDate
}


