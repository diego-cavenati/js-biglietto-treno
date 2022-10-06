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

// The output final price with a maximum of two decimal
if (userAge <= 18) {
    console.log((ticketFullPrice - discountMinors).toFixed(2));
} else if (userAge > 65) {
    console.log((ticketFullPrice - discountOver).toFixed(2));
} else {
    console.log(ticketFullPrice.toFixed(2));
}