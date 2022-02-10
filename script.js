//LIVES CONVENCIONAIS
function liveConventional(){
    const name = document.getElementById("name-conventional").value;
    const checkCelebration = document.getElementById("check-celebration-conventional").checked;
    const checkCelebrationLink = document.getElementById("check-celebrationlink-conventional").checked;
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
    const name = document.getElementById("name-customizing").value;
    const message = document.getElementById("message-customizing").value;
    const checkCelebration = document.getElementById("check-celebration-customizing").checked
    const checkCelebrationLink = document.getElementById("check-celebrationlink-customizing").checked
    const supper = document.getElementById("check-supper-customizing").checked 
    const baptism = document.getElementById("check-baptism-customizing").checked
    const conference = document.getElementById("check-conference-customizing").checked
    const christmas = document.getElementById("check-christmas-customizing").checked
    const time18 = document.getElementById("check-18-customizing").checked
    const time19 = document.getElementById("check-19-customizing").checked

    const dateY = new Date();
    const year = dateY.getFullYear();
    const date = getDate();
    
    if( time18 === true){
        time = "18H"
    }
    if( time19 === true){
        time = "19H"
    }

    if( checkCelebration === true ){
        if(supper === true){
            if( baptism === true){
                result = ("CELEBRAÇÃO IBNA - BATISMO NAS ÁGUAS E CEIA DO SENHOR | " + date + " - " + time);
            }
            if( baptism === false){
                result = ("CELEBRAÇÃO IBNA - CEIA DO SENHOR | " + date + " - " + time)                
            }
        }
        if( christmas === true){
            result = ("CANTATA DE NATAL IBNA + " + year + " | " + message +" | "+ message + " - " + time)  
        }


    }
    if(checkCelebrationLink === true){
        if(conference === true){
            result = (message + " - " + "CONFERÊNCIA LINK " + year + " | " + name)            
        }
    }
    getResult(result)
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


