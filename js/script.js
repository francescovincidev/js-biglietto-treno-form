


document.getElementById("btn").addEventListener("click", function () {
    
    // INPUT
    const userName = (document.getElementById("user-name")).value;
    const userAge = (document.getElementById("user-age")).value;
    const userKM = parseInt((document.getElementById("user-km")).value);
    console.log(userAge);
    console.log(userKM, typeof userKM);

    
    let message = "";
    let price;
    // controllo dati numerici
    if (isNaN(userKM)) {
        message = "Inserisci dati numerici. Ricarica la pagina."
        
    } else {
        // calcolo prezzo
        price = (userKM * 0.21);
        console.log(price);
        message = `${userName}, il prezzo che devi pagare è € ${price.toFixed(2)}`;
    
        // clacolo perzzo de minorenne
        if (userAge === "minorenne") {
            price = (price - (price*0.2));
            console.log(price); 
            message = `${userName}, dato che sei minorenne, il prezzo che devi pagare è € ${price.toFixed(2)}`;
    
    
        // calcolo prezzo se over 65    
        } else if(userAge === "over65"){
            price = (price - (price*0.4));
            console.log(price); 
            message = `${userName}, dato che sei over 65, il prezzo che devi pagare è € ${price.toFixed(2)}`;
        }
    
    }
    // OUTPUT
    document.getElementById("message-html").innerHTML = message;
})


