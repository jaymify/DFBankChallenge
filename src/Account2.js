class Account2 {
    // Encapsulated the properties behaviour by making them private and using getters and setters

    #states
    #balance
    // Constructor called when instance created to initially set object properties
    constructor(balance = 0) {
        this.#balance = balance;
        this.#states = [];
    }


    // Getters - reads
    get states() {
        return this.#states;
    }

    get balance() {
        return this.#balance;
    }

    // Setters - writes
    set states(state) {
        this.#states = state;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    // Verify Account has been created
    checkAccountCreated() {
        if (Account2 === undefined || Account2 === null) {
            console.log(`Account doesn't exist`);
        } else {
            console.log(`Account successfully created`);
        }
    }


    //validate object (validate the obj, value (higher than 0), date (is a valid date giving the context))
    Deposit(obj) {
        this.#balance += obj.value;
        obj.action = "D";
        obj.balance = this.#balance;
        this.#states.push(obj)
    }

    //validate object (validate the obj, value (higher than 0), date (is a valid date giving the context))
    Withdraw(obj) {
        this.#balance -= obj.value;
        obj.action = "W";
        obj.balance = this.#balance;
        this.#states.push(obj)
    }

    // if addDeposit same, print "       "...
    printTransaction() {
        console.log(`date       || credit  || debit  || balance`);
        let i = this.#states.length;

        while (i > 0) {
            i--;
            let obj_date = this.#states[i].date;
            let day_str = ""
            let month_str = ""

            if (obj_date.getDate() < 10) {
                day_str = "0" + obj_date.getDate();
            }
            else {
                day_str = obj_date.getDate();
            }

            if ((obj_date.getMonth() + 1) < 10) {
                month_str = "0" + (obj_date.getMonth() + 1);
            }
            else {
                month_str = (obj_date.getMonth() + 1);
            }

            let str_date = day_str + "/" + month_str + "/" + obj_date.getFullYear()
            let line = ""
            line += str_date + " ||";

            let credit = "         ";
            let debit = "        ";
            if (this.#states[i].action == "D") {
                credit = " " + this.#states[i].value + ".00" + " ";
            }
            else {
                debit = " " + this.#states[i].value + ".00" + " ";
            }

            line += credit + "||" + debit + "|| " + this.#states[i].balance + ".00"

            console.log(line);
        }
    }
}

export default Account2;
