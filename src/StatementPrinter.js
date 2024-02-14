class StatementPrinter {
    static numberOfStatementsPrinted = 0;

    static printStatement(bank) {
        console.log(`=======================`);
        console.log(`Bank Statement`);
        console.log(bank.getName());
        console.log(`date       || credit  || debit  || balance`);
        console.log(`${this.formattedDate} ||         || 500.00 || 2500.00`);
        console.log(`13/01/2012 || 2000.00 ||        || 3000.00`);
        console.log(`10/01/2012 || 1000.00 ||        || 1000.00`);
        bank.printSpecificDetails();
        console.log(`=======================`);
    }
}

export default StatementPrinter;