let eventList = []
let id = 0;
let holdTheCycle = true
let option;
let eventName, description, date;

while(holdTheCycle){

    option = validateOptions(`123456`,`Ingresa el número correspondiente a la opción deseada\n
                            1.Añadir un evento\n
                            2.Ver lista de eventos\n
                            3.Buscar evento por nombre\n
                            4.Actualizar un evento\n
                            5.Eliminar un evento\n
                            6.Salir\n`);
    
    switch(option){
        
        case '1':
            let addNewEvent = false
            do{
                eventName = prompt("Ingresa el nombre del evento:").toLowerCase()
                date = prompt("Fecha del evento (YYYY-MM-DD):")
                description = prompt("Descripcíon:").toLowerCase()

                const newEvent= Object.assign({},{
                    id: ++id,
                    eventName,
                    date,
                    description
                })
                // let newEvent={}
                // newEvent = {
                //     id: ++id,
                //     eventName,
                //     date,
                //     description
                // }
                eventList.push(newEvent)
                addNewEvent = confirm("¿Deseas agregar un nuevo evento?")           
            }while(addNewEvent) 
            break;

        case '2':
            showEventsList();
            break;

        case '3':
            showEventsList();
            const search = prompt("Ingresa el nombre del evento a buscar:")
            const eventSearched = eventList.filter(event => event.eventName === search);
            if (eventSearched.length == 0){
                alert("No se encontraron eventos con ese nombre.")
                break;
            }
            let str ="";
            eventSearched.forEach(obj => str += `id: ${obj.id}\nNombre: ${obj.eventName}\nFecha: ${obj.date}\nDescripción: ${obj.description}`);
            alert(str)
            break;

        case '4':
            showEventsList();
            const eventId = validateIsNumber("Ingresa el id del evento que deseas actualizar:")
            const eventNameUpdated = prompt("Por favor ingresa el nombre del evento o enter si deseas mantener el mismo: ");
            const eventDateUpdated = prompt("Por favor ingresa la fecha del evento o enter si deseas mantener la misma: ");
            const eventDescriptionUpdated = prompt("Por favor ingresa la descripcion del evento o enter si deseas mantener la misma: ");

            if (eventNameUpdated) {
                eventList[eventId - 1].eventName = eventNameUpdated;
            }
            if (eventDateUpdated) {
                eventList[eventId - 1].date = eventDateUpdated;
            }
            if (eventDescriptionUpdated) {
                eventList[eventId - 1].description = eventDescriptionUpdated;
            }
            break;

        case '5':
            showEventsList();
            const eventIdToDelete = prompt("Por favor ingresa el id del evento que deseas eliminar: ");
             eventList = eventList.filter((event, index) => index !== eventIdToDelete - 1);
             //eventList.splice(eventIdToDelete - 1, 1);
        }
        holdTheCycle = confirm("¿Deseas Regresar al menú principal?")
    }



//function to construct the string and show the list of events
function showEventsList(){
    let showEvents = "";
    eventList.forEach( obj =>{
        showEvents += `------------\nId: ${obj.id}\nNombre: ${obj.eventName}\nFecha: ${obj.date}\nDescripción: ${obj.description}\n `
    })
    alert(showEvents)
}

function validateIsNumber(message) {
    let num;
    do {
        num = prompt(message);
        if (isNaN(num)) {
            alert("El valor ingresado no es válido, intenta de nuevo.");
        }
    } while (isNaN(num));
    return Number(num);
}
function validateOptions(options,message){
    let option;
    do{
        option = prompt(message);
        if (options.includes(option.toUpperCase())){
            return option.toUpperCase();
        }
        else{
            alert("El valor ingresado no es válido, intenta de nuevo.");
        }
    }while(!options.includes(option));
}