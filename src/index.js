import Account from "./Account.js";

// Create a new instance of Account class so I can keep values in it
const accountDetails = new Account();

// Checks Account class is not empty
accountDetails.checkAccountCreated();

// Print statement history headings
accountDetails.printHeadings();

// Import an array of deposits from Deposits class?
// Creates a transaction: Add first deposit of 1000
accountDetails.addDate("10/01/2012");
accountDetails.addDeposit(1000);
// Prints the transaction (date, amount added, new balance)
accountDetails.printTransaction();


// Import an array of withdrawals from Withdrawals class?
// Creates a transaction:  Add second deposit of 2000
accountDetails.addDate("13/01/2012");
accountDetails.addDeposit(2000);
// Prints the transaction (date, amount added, new balance)
accountDetails.printTransaction();


// // Creates a transaction:  Add a withdrawal of 500
accountDetails.addDate("14/01/2012");
accountDetails.addWithdrawal(500);
// // Prints the transaction (date, amount added, new balance)
accountDetails.printTransaction();

// Print the statement with a dedicated StatementPrinter class
// Print statement in correct order