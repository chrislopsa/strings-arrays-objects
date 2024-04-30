//Script to validate emails
let validator1, validator2, validator3, validator4 
let repeatFlag;
do{
    let userEmail = prompt("Ingresa tu correo electrónico").trim()                          
    validator1 = aSingleCharacter(userEmail,"@")
    validator2 = dotAfterAt(userEmail)
    validator3 = charactersNotTogether(userEmail,".","@")
    validator4 = noEmptySpaces(userEmail)

    if( validator1 && validator2 && validator3 && validator4){
        alert("Correo electrónico válido")
        repeatFlag = false
    }
    else{
        let invalidEmailAlert = "Dirección de correo electrónico invalida.\n"
        if(!aSingleCharacter(userEmail,"@")){
            invalidEmailAlert += "Debes tener un unico '@'\n"
        }
        if(!dotAfterAt(userEmail)){
            invalidEmailAlert += "Debe haber al menos un punto '.' despues del '@'\n"
        }
        if(!charactersNotTogether(userEmail,".","@")){
            invalidEmailAlert += "El punto '.' y el símbolo '@' no pueden estar juntos.\n"
        }
        if(!noEmptySpaces(userEmail)){
            invalidEmailAlert += "El correo electrónico no puede contener espacios en blanco.\n"
        }
        alert(invalidEmailAlert)
        repeatFlag = true
    } 
}while(repeatFlag)


function aSingleCharacter (string,character){
    let a = string.indexOf(character)
    let b = string.lastIndexOf(character)
    if((a == b) && (a != -1)){
        return true
    }
    else{
        return false     
    }   
}

function dotAfterAt (string){
    let indexChar = string.indexOf("@")
    if (string.includes(".",indexChar)){
        return true
    }
    else{
        return false     
    }  
}
function charactersNotTogether(string,char1,char2){
    if (string.includes(char1+char2) || string.includes(char2+char1)){
        return false
    }
    else{
        return true    
    }  
}

function noEmptySpaces (string){
    if (string.includes(" ")){
        return false
    }
    else{
        return true
    }
}



