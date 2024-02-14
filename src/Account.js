class Account {
    // Encapsulated the properties behaviour by making them private and using getters and setters
    #dates;
    #credits;
    #debits;
    #balance;

    // Constructor called when instance created to initially set object properties
    constructor(dates, credits = 0, debits = " ", balance = 0) {
        this.#dates = dates;
        this.#credits = credits;
        this.#debits = debits;
        this.#balance = balance;
    }


    // Getters - reads
    get dates() {
        return this.#dates;
    }

    get credits() {
        return this.#credits;
    }

    get debits() {
        return this.#debits;
    }

    get balance() {
        return this.#balance;
    }

    // Setters - writes
    set dates(newDate) {
        this.#dates = newDate;
    }

    set credits(newCredit) {
        this.#credits = newCredit;
    }

    set debits(newDebit) {
        this.#debits = newDebit;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    // Verify Account has been created
    checkAccountCreated() {
        if (Account === undefined || Account === null) {
            console.log(`Account doesn't exist`);
        } else {
            console.log(`Account successfully created`);
        }
    }

    // Add date to transaction
    addDate(addDate) {
        this.#dates = addDate;
    }

    // Add money and update the balance
    addDeposit(addAmount) {
        this.#credits = addAmount;
        this.#balance += addAmount;
    }

    // Add money into a new class?


    // Remove money and update the balance
    addWithdrawal(removeAmount) {
        // Checks if withdrawal exceeds balance
        if (this.#balance - removeAmount >= 0) {
            this.#debits = removeAmount;
            this.#balance -= removeAmount;
        }
        else console.log(`Error: Withdrawal request exceeds balance`);
    }

    printDateAdded() {
        console.log(`Date added on: ${this.#dates}`);
    }

    printAmountAdded() {
        console.log(`Amount added: ${this.#credits}.00`);
    }

    printAmountRemoved() {
        console.log(`Amount withdrawn: ${this.#debits}.00`);
    }

    printBalance() {
        console.log(`Latest balance: ${this.#balance}.00`);
    }

    printHeadings() {
        console.log(`date       || credit  || debit  || balance`);
    }

    // if addDeposit same, print "       "...
    printTransaction() {
        if (this.#debits == 0) {
            console.log(`${this.#dates} || ${this.#credits}.00 ||        || ${this.#balance}.00`);
        } else {
            console.log(`${this.#dates} ||         || ${this.#debits}.00 || ${this.#balance}.00`);
        }
    }
}

export default Account;