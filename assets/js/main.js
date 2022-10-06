/*************************
 calculate ticket price
**************************/

// 1 - ask the user the number of kilometres he/she wants to travel
const userKm = Number(prompt("how many kilometres do you want to cover?"));


// 2 - ask the user age
const userAge = Number(prompt("How old are you?"));


// 3 - calculate the total price of the trip:
// ticket price is defined according to km (0.21 € per km)
const priceKm = 0.21;

// ticket price without discounts
const ticketFullPrice = priceKm * userKm;

// 20% discount for minors
const discountMinors = (ticketFullPrice / 100) * 20;

// 40% discount for the over 65s
const discountOver = (ticketFullPrice / 100) * 40;

// prompt validation number userKm
if (isNaN(userKm) || isNaN(userAge)) {
    
    alert(" is not a number");
    document.getElementById(`ticket_price`).innerHTML = "try again and enter numbers this time";

} else { // The output final price with a maximum of two decimal

    if (userAge <= 18) {

        document.getElementById(`ticket_price`).innerHTML = ((ticketFullPrice - discountMinors).toFixed(2) + " €");

        document.getElementById(`discount_message`).innerHTML = "You are a minor and are entitled to 20% discount";

    } else if (userAge >= 65) {

        document.getElementById(`ticket_price`).innerHTML = ((ticketFullPrice - discountOver).toFixed(2) + " €");

        document.getElementById(`discount_message`).innerHTML = "You are over 65s and are entitled to 40% discount";

    } else {

        document.getElementById(`ticket_price`).innerHTML = (ticketFullPrice.toFixed(2) + " €");

        document.getElementById(`discount_message`).innerHTML = "Based on your age you are not entitled to discounts";

    }
}