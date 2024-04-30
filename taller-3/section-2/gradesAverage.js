// calculadora de promedio de calificaciones

let gradesString = "";
let gradesArray = [];

gradesString = prompt("Por favor ingresa las calificaciones separadas por comas");
gradesArray = gradesString.split(",");

//convert each element from string to number
const gradesArrayInNumbers = gradesArray.map(num => Number(num));

const calculateAverage = gradesArrayInNumbers.reduce((accumulator,currentValue,index,gradesArray) =>{
    
    accumulator += currentValue;
    if(index === gradesArray.length -1){
        return accumulator / gradesArray.length;
    }
    else{
        return accumulator;
    }
})
console.log(`El promedio de las calificaciones es: ${calculateAverage}`);