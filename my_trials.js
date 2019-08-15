// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];


// Add some phone numbers to our map
const phoneNumbers = new Map([['home','510-867-5309'],
                             ['mobile','415-555-1212'],
                             ['business','415-123-4567']

 ]);

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo (name, number, business) {

    const accountInfo =` Account Name: ${name}\n Account Number: ${number}\n Business Name: ${business}`;

    return accountInfo;

}

console.log(printAccountInfo(accountHolder, accountNumber, businessName));


// Add function to print all addresses, including a header
function printAddresses (address){

    for (const x of address){
        console.log(". " + x)
    }
        

}

console.log (printAddresses(addresses));


// Add function to print phone types and numbers

function printPhoneNumber (phones){
       console.log ("Phone numbers:");
       console.log(phones)
       console.log(Object.values(phones))
       console.log(Object.entries(phones))


       for(let x of phones){
        console.log (x);
       }

       //WHY DOESNT THIS WORK???? 
       for(let x in phones){
        console.log (x);
       }


        for(let x of Object.values(phones)){
        console.log (x);
       }


        for(let [x, y] of Object.entries(phones)){
        console.log (x, y);
       }

       

       for (let [phone, number] of phoneNumbers) {
        console.log(`${phone}: ${number}`);
    }


}

printPhoneNumber(phoneNumbers);

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const accountTransactions = new Map();

// Add function to add transactions
function addTransaction(date, number) {

    accountTransactions.set(date, number);

}

addTransaction("May-2", -500);
addTransaction("May-13", +1200);
addTransaction("May-15", -100);
addTransaction("May-21", -359);
addTransaction("May-29", +2200);

// Use the function to add transactions


// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




