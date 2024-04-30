//calculadora de estadísticas de calificaciones.

let gradesArray = [];

gradesString = prompt("Por favor ingresa las calificaciones separadas por comas");
gradesArray = gradesString.split(",").map(el => parseInt(el));

const sum = gradesArray.reduce((accumulator,currentValue) => accumulator += currentValue);
const calculateAverage = sum / gradesArray.length;

const calculateMaxNum = gradesArray.reduce((maxNumber,currentValue) => {
    if (maxNumber < currentValue){
        maxNumber = currentValue
    }
    return maxNumber;
})
const calculateMinNum = gradesArray.reduce((minNumber,currentValue) => {
    if (minNumber > currentValue){
        minNumber = currentValue
    }
    return minNumber;
})
const numberOfPasses = gradesArray.filter(element => element >= 70);
const numberOfFailures = gradesArray.filter(element => element < 70);

//create a copy so as not to modify the original array.
const gradesInDescendingOrder = gradesArray.slice().sort((a, b) => b - a);

//10,45,78,74,58,69,21,56,32,70

console.log(`El promedio de las calificaciones es: ${calculateAverage}`);
console.log(`La calificación máxima es: ${calculateMaxNum}`);
console.log(`La calificación mínima es: ${calculateMinNum}`);
console.log(`El número de estudiantes aprobados es: ${numberOfPasses.length}`);
console.log(`El número de estudiantes reprobados es: ${numberOfFailures.length}`);
console.log(`Calificaciones ordenadas de mayor a menor: ${gradesInDescendingOrder}`);