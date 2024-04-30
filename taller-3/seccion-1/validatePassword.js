// validador de constraseñas seguras

const password = prompt("Ingresa tu contraseña, esta debe tener las siguientes condiciones:\n 1.Debe tener al menos 8 caracteres\n2.Debe tener al menos un numero\n3.Debe tener al menos una letra\n4.Debe tener al menos un caracter especial.");

// Validate the minimum length
const validatePasswordLength = (password) => password.length >= 8 ; //return boolean

// validate if has a number
const validateIncludesNumbers = (password) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return password.split("").some(element => numbers.includes(element));
}

//validate if has a letter
const validateIncludesLetters = (password) => {
    const lettersLowerCase = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ]
    const lettersUpperCase = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y',
        'Z'
    ]
    return password.split("").some( character => {
        return lettersLowerCase.includes(character) || lettersUpperCase.includes(character)
    })
}

//validate if has a special character
const validateSpecialChars = (password) => {
    const specialCharacters =`! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \  ~ \ `
    const specialCharacterList = specialCharacters.split(' ');
    return password.split("").some(character => specialCharacterList.includes(character))
}

const val1 = validatePasswordLength(password)
const val2 = validateIncludesNumbers(password)
const val3 = validateIncludesLetters(password)
const val4 = validateSpecialChars(password)
if (val1 && val2 && val3 && val4){
    alert("Contraseña segura")
}else{
    alert("La constraseña es insegura")
}