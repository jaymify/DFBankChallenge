import Account2 from "./Account2.js";

// Create a new instance of Account class so I can keep values in it
const accountDetails = new Account2();

// Checks Account class is not empty
accountDetails.checkAccountCreated();

// Print statement history headings
//accountDetails.printHeadings();

// Import an array of deposits from Deposits class?
// Creates a transaction: Add first deposit of 1000

const deposit1 = { date: new Date(2012, 0, 10), value: 1000 }
const deposit2 = { date: new Date(2012, 0, 13), value: 2000 }
//const deposit3 = {date : new Date(2012, 0, 14), value : 1500}
const withdraw1 = { date: new Date(2012, 0, 14), value: 500 }

accountDetails.Deposit(deposit1);
accountDetails.Deposit(deposit2);
//accountDetails.Deposit(deposit3);
accountDetails.Withdraw(withdraw1);


// Prints the transaction (date, amount added, new balance)
accountDetails.printTransaction();


// Print the statement with a dedicated StatementPrinter class
// Print statement in correct order