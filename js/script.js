


document.getElementById("btn-calc").addEventListener("click", function () {
    
    // INPUT
    const userName = (document.getElementById("user-name")).value;
    const userAge = (document.getElementById("user-age")).value;
    const userKM = parseInt((document.getElementById("user-km")).value);
    console.log(userAge);
    console.log(userKM, typeof userKM);

    
    let message = "";
    let price;
    let offert = "";
    let carriage;
    let CP;

    // controllo dati numerici
    if (isNaN(userKM)) {
        message = "Inserisci dati numerici. Ricarica la pagina."
        
    } else {
        // calcolo prezzo
        price = (userKM * 0.21);
        console.log(price);
        offert = "Standard";
        carriage = Math.floor(Math.random() * 10 + 1);
        CP = Math.floor(Math.random() * (100000 - 10000 + 1) ) + 10000;


    
        // clacolo perzzo de minorenne
        if (userAge === "minorenne") {
            price = (price - (price*0.2));
            console.log(price); 
            offert = "20%";
            
    
        // calcolo prezzo se over 65    
        } else if(userAge === "over65"){
            price = (price - (price*0.4));
            console.log(price); 
            offert = "40%";

        }
    
    }
    // OUTPUT
    document.getElementById("message-html").innerHTML = message;
    document.getElementById("user-name-output").innerHTML = `${userName}`;
    document.getElementById("offert").innerHTML = `${offert}`;
    document.getElementById("carriage").innerHTML = `${carriage}`;
    document.getElementById("CP").innerHTML = `${CP}`;
    document.getElementById("price").innerHTML = `€ ${price.toFixed(2)}`;
})

document.getElementById("btn-reset").addEventListener("click", function () {
    document.getElementById("message-html").innerHTML = "";
    document.getElementById("user-name-output").innerHTML = "";
    document.getElementById("offert").innerHTML = "";
    document.getElementById("carriage").innerHTML = "";
    document.getElementById("CP").innerHTML = "";
    document.getElementById("price").innerHTML = "";
    (document.getElementById("user-name")).value = "";
    (document.getElementById("user-km")).value = "";

})
