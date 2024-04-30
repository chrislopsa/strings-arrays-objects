let fullName;
let splitFullName =[];
let baseUserName ="";
let userEmail = "";
let users = {};
const domainName = "myDomain.com";
let continueAdd;


do{
    do{   
        let fullName = prompt("Ingresa tu nombre y apellido:");
        fullName = fullName.toLowerCase()
        fullName = fullName.trim()
        splitFullName = fullName.split(" ")
    
        if (splitFullName.length !=2){
            alert("Formato no valido")
        }
    }while(splitFullName.length !=2)
    
    //construct the username with the first three letters of each word(item)
    baseUserName = splitFullName[0].slice(0,3) + splitFullName[1].slice(0,3)
    
    //build an array with the usernames
    const userKeys = Object.keys(users) // ["nicpic", "juaper"]
    
    //cycle to check if 'username' already exists, if so, add a number to the end of it that is increasing.
    let counter = 0
    userKeys.forEach(username => {
        let semiMatch = ""
        for (let i = 0; i < username.length; i++) {
            semiMatch = semiMatch + username[i];
            if (semiMatch === baseUserName) { // nicpic === nicpic
                counter++
            }
        }
    })
    if (counter) {
        baseUserName = baseUserName + counter
    }
    userEmail = `${baseUserName}@${domainName}` //namape@myDomain.com
    Object.assign(users, {
        [baseUserName]: userEmail
    })
    console.log(users);
    continueAdd = confirm("Presiona 'Aceptar' para agregar otro usuario o 'Cancelar' para salir");
}while(continueAdd)









