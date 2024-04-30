let productsList = []
let id = 0;
let holdTheCycle = true
let option;
let productName, description, quantity, price;

while(holdTheCycle){

    option = validateOptions(`ABCDEFGHIJKLM`,`Ingresa la letra correspondiente a la opción deseada:\n\n
                            A.Añadir un producto\n
                            B.Duplicar un producto\n
                            C.Visualización y busqueda de productos\n
                            D.Actualizar un producto\n
                            E.Eliminar un producto\n
                            F.Verificación de existencia de productos e inventario.\n
                            G.Venta de productos\n
                            H.Compra de productos\n
                            I.Cálculo del valor total del inventario.\n
                            J.Ordenamiento de productos\n
                            K.Identificación de productos con posibles malas palabaras.\n
                            L.Reporte general de productos\n
                            M.Salir\n`);
    
    switch(option){
        
        case 'A':
            let addNewProduct = false
            do{
                productName = prompt("Ingresa el nombre del producto:").toLowerCase()
                price = validateIsNumber("Ingresa el precio del producto.")
                quantity = validateIsNumber("Ingresa la cantidad de existencias del producto.")
                description = prompt("Descripcíon del producto:").toLowerCase()

                const newProduct= Object.assign({},{
                    id: ++id,
                    productName,
                    price,
                    quantity,
                    description
                })
                productsList.push(newProduct)
                addNewProduct = confirm("¿Deseas agregar un nuevo Producto?")           
            }while(addNewProduct) 
        break;

        case 'B':
            showInventary();
            const search = validateIsNumber("Ingresa el id del producto que deseas duplicar:")
            const productSearched = productsList.filter(product => product.id === search);

            if (productSearched.length == 0){
                alert("No se encontraron productos con ese Id.")
                break;
            }
            const productToDuplicate = productsList[search -1];

            let matches = 0;
            productsList.forEach(product => {
                if (product.productName.startsWith(productToDuplicate.productName)) {
                    matches++;
                }
            });
            const duplicatedProduct = Object.assign({}, {
                id: ++id,
                productName: matches ? productToDuplicate.productName + ' Copy ' + matches : productToDuplicate.productName + ' Copy',
                price: productToDuplicate.price,
                quantity: productToDuplicate.quantity,
                description: productToDuplicate.description
            });
            productsList.push(duplicatedProduct);
        break;

        case 'C':
            //show the inventary
            showInventary();
            let repeatThisCycle = true;
            while(repeatThisCycle){
                option = validateOptions(`123`,`Ingresa el número correspondiente a la opción deseada:\n\n
                                            1.Buscar productos por nombre\n
                                            2.Buscar productos por precio\n
                                            3.Volver al menú principal\n`)

                switch(option){

                    case '1':
                        case "1":
                            // search products by Name
                            const productName = prompt("Por favor ingresa el nombre del producto: ");
                            const productsByName = productsList.filter(product => product.productName === productName);

                            if (productsByName.length == 0){
                                alert("No se encontraron productos con ese nombre.")
                                break;
                            }

                            let strToName ="";
                            productsByName.forEach(obj => strToName += `Id: ${obj.id}\nNombre: ${obj.productName}\nPrecio: ${obj.price}\nCantidad: ${obj.quantity}\nDescripción: ${obj.description}`);
                            //Show the product to the user.
                            alert(strToName);
                            break;

                        case "2":
                            // search produts by price
                            const price = prompt("Por favor ingresa el precio del producto: ");
                            const productsByPrice = productsList.filter(product => product.price === price);

                            let strToPrice ="";
                            productsByName.forEach(obj => strToPrice += `Id: ${obj.id}\nNombre: ${obj.productName}\nPrecio: ${obj.price}\nCantidad: ${obj.quantity}\nDescripción: ${obj.description}`);
                            //Show the product to the user.
                            alert(strToPrice)
                            break;

                        case "3":
                            repeatThisCycle = false;
                            break;   
                }
            } 
        break;   

        case 'D':
            //show the products to display the Id
            showInventary();
            //ask for the Id of the product to be updated
            const productIdToUpdate = validateIsNumber("Por favor ingresa el id del producto que deseas actualizar: ");
            //ask for the new data
            const productNameUpdated = prompt("Por favor ingresa el nombre del producto o enter si deseas mantener el mismo: ");
            const productPriceUpdated = validateIsNumber("Por favor ingresa el precio del producto o enter si deseas mantener el mismo: ");
            const productQuantityUpdated = validateIsNumber("Por favor ingresa la cantidad del producto o enter si deseas mantener el mismo: ");
            const productDescriptionUpdated = prompt("Por favor ingresa la descripción del producto o enter si deseas mantener el mismo: ");
            // update the product
            if (productNameUpdated) {
                productsList[productIdToUpdate - 1].productName = productNameUpdated;
            }
            if (productPriceUpdated) {
                productsList[productIdToUpdate - 1].price = productPriceUpdated;
            }
            if (productQuantityUpdated) {
                productsList[productIdToUpdate - 1].quantity = productQuantityUpdated;
            }
            if (productDescriptionUpdated) {
                productsList[productIdToUpdate - 1].description = productDescriptionUpdated;
            }
        break;

        case 'E':
            //show the products to display the Id
            showInventary();
            const productIdToDelete = validateIsNumber("Por favor ingresa el id del producto que deseas eliminar: ");
            productsList = productsList.filter((event, index) => index !== productIdToDelete - 1);
        break;

        case 'F':
            //show the products to display the name
            showInventary();
           // Verify Stock and Inventory
           const productNameToCheck = prompt("Por favor ingresa el nombre del producto: ");
           const productToCheck = productsList.find(product => product.productName === productNameToCheck);
           if (!productToCheck) {
               alert("Producto no encontrado");
               break;
           }
           if (productToCheck.productQuantity === 0) {
               alert("Producto agotado");
               break;
           }
           alert(`Producto: ${productToCheck.productName} - ${productToCheck.price} - ${productToCheck.quantity} - ${productToCheck.description}`);
           break;

       case 'G':
           //show the products to display the name
           showInventary();
           const productNameToSell = prompt("Por favor ingresa el nombre del producto: ");
           const productToSell = productsList.find(product => product.productName === productNameToSell);
           if (!productToSell) {
               alert("Producto no encontrado");
               break;
           }
           if (productToSell.quantity === 0) {
               alert("Producto agotado");
               break;
           }
           //subtract one unit from the quantity of products
           productToSell.quantity--;
           alert(`Venta realizada con exito, ${productToSell.quantity} unidades restantes`);
        break;
        
        case 'H':
            //buy of products
            const productNameToBuy = prompt("Por favor ingresa el nombre del producto: ");
            const productToBuy = productsList.find(product => product.productName === productNameToBuy);
            if (!productToBuy) {
                alert("Producto no encontrado");
                break;
            }
            productToBuy.quantity++;
            alert(`Compra realizada con exito, ${productToBuy.quantity} unidades disponibles`);
            break;


        case 'I':
            // Total Inventory Calculation
            const totalValue = productsList.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
            alert(`El valor total del inventario es: ${totalValue}`);
            break;


        case 'J':
            // Order Products

            let repeatCycle = true;
            while (repeatCycle) {
                const option = validateIsNumber("123","Por favor ingresa una de las siguientes opciones: \n 1. Ordenar productos por nombre \n 2. Ordenar por precio \n 3. Volver al menu principal");
                switch (option) {

                    case "1":
                        // Order Products per name
                        productsList.sort((a, b) => a.productName.localeCompare(b.productName));
                        productsList.forEach(product => {
                            console.log(`Producto: ${product.productName} - ${product.price} - ${product.quantity} - ${product.description}`);
                        });
                        break;

                    case "2":
                        // Order Products per price
                        productsList.sort((a, b) => a.price - b.price);
                        productsList.forEach(product => {
                            console.log(`Producto: ${product.productName} - ${product.price} - ${product.quantity} - ${product.description}`);
                        });
                        break;

                    case "3":
                        repeatCycle = false;
                        break;
                }
            }
            break;

        case 'K':
            // Identifying products with profanity
            productsList.forEach(product => {
                const descriptionWords = product.description.split(" ");
                descriptionWords.forEach(word => {
                    if (badWords.includes(word)) {
                        console.log(`Producto: ${product.productName} - ${product.price} - ${product.quantity} - ${product.description}`);
                    }
                });
            });
            break;
        case 'L':

            
            const totalProducts = productsList.length;
            const totalValueproductsList = productsList.reduce((acc, product) => acc + product.price * product.quantity, 0);
            const mostExpensiveProducts = productsList.filter(product => product.price === Math.max(...productsList.map(product => product.price)));
            const cheapestProducts = productsList.filter(product => product.price === Math.min(...productsList.map(product => product.price)));
            const mostAvailableProducts = productsList.filter(product => product.quantity === Math.max(...productsList.map(product => product.quantity)));
            const leastAvailableProducts = productsList.filter(product => product.quantity === Math.min(...productsList.map(product => product.quantity)));
            const productsWithBadWords = productsList.filter(product => {
                const descriptionWords = product.description.split(" ");
                return descriptionWords.some(word => badWords.includes(word));
            });
            console.log(`Cantidad de productos: ${totalProducts}`);
            console.log(`Valor total del inventario: ${totalValueproductsList}`);
            console.log(`Cantidad de productos más caros: ${mostExpensiveProducts.length}`);
            console.log(`Cantidad de productos más baratos: ${cheapestProducts.length}`);
            console.log(`Cantidad de productos con mayor cantidad disponible: ${mostAvailableProducts.length}`);
            console.log(`Cantidad de productos con menor cantidad disponible: ${leastAvailableProducts.length}`);
            console.log(`Cantidad de productos con posibles malas palabras en la descripción: ${productsWithBadWords.length}`);
            break;

        case 'M':
            holdTheCycle = false;
            break;
    
    }
}


//function to construct the string and show the list of events
function showInventary(){
    let showProducts = "";
    productsList.forEach( obj =>{
        showProducts += `------------\nId: ${obj.id}\nNombre: ${obj.productName}\nPrecio: ${obj.price}\nCantidad: ${obj.quantity}\nDescripción: ${obj.description}\n`
    })
    alert(showProducts)
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