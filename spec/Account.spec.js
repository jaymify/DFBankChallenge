import Account from "../src/Account.js";

xdescribe("US2-01 - Account Deposit Functionality", () => {
    it("see if account class is created (not undefined/null)", () => {
        // Arrange
        const accountTest = new Account();
        const expectedResult = "Account successfully created";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest.checkAccountCreated();

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});

xdescribe("US2-02 - Account Deposit Functionality", () => {
    it("see if terminal prints the statement history headings (date, credit, debit, balance)", () => {
        // Arrange
        const accountTest = new Account();
        const expectedResult = "date       || credit  || debit  || balance";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest.printHeadings();

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});

xdescribe("US2-03 - Account Deposit Functionality", () => {
    it("see if terminal successfully prints how much they would like to deposit (1000 and 2000)", () => {
        // Arrange
        const accountTest = new Account();
        const expectedResult = "Amount added: 1000.00";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest.addDeposit(1000);
        accountTest.printAmountAdded();
        accountTest.addDeposit(2000);
        accountTest.printAmountAdded();

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});

xdescribe("US2-04 - Account Deposit Functionality", () => {
    it("see if terminal successfully updates the balances initially from 0 to 1000", () => {
        // Arrange
        const accountTest = new Account();
        const expectedResult = "Latest balance: 1000.00";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest.addDeposit(1000);
        accountTest.printBalance();

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});

xdescribe("US2-05 - Account Deposit Functionality", () => {
    it("see if terminal successfully updates the balances initially from 0 to 1000, then to 3000", () => {
        // Arrange
        const accountTest = new Account();
        const expectedResult = "Latest balance: 3000.00";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest.addDeposit(1000);
        accountTest.addDeposit(2000);
        accountTest.printBalance();

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});

xdescribe("US2-06 - Account Deposit Functionality", () => {
    it("see if terminal successfully prints what dates they would like to add them on (10/01/2012 for 1000)", () => {
        // Arrange
        const accountTest = new Account();
        const expectedResult = "Date added on: 10/01/2012";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest.addDate("10/01/2012");
        accountTest.printDateAdded();

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});

xdescribe("US3-01 - Account Withdrawal Functionality", () => {
    it("see if terminal successfully prints how much they would like to withdraw (500)", () => {
        // Arrange
        const accountTest2 = new Account();
        const expectedResult = "Amount withdrawn: 500.00";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest2.addDeposit(3000);
        accountTest2.addWithdrawal(500);
        accountTest2.printAmountRemoved();

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});

xdescribe("US3-02 - Account Withdrawal Functionality", () => {
    it("see if terminal returns an error if the withdrawal amount exceeds the customer's latest balance", () => {
        // Arrange
        const accountTest2 = new Account();
        const expectedResult = "Error: Withdrawal request exceeds balance";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest2.addDeposit(3000);
        accountTest2.addWithdrawal(5000);

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});

xdescribe("US3-03 - Account Withdrawal Functionality", () => {
    it("see if terminal successfully reduces the balance from 3000 to 2500", () => {
        // Arrange
        const accountTest2 = new Account();
        const expectedResult = "Latest balance: 2500.00";
        const logSpy = spyOn(console, `log`);

        // Act
        accountTest2.addDeposit(3000);
        accountTest2.addWithdrawal(500);
        accountTest2.printBalance();

        //Assert - See if mock behaves as expected
        expect(logSpy).toHaveBeenCalledWith(expectedResult);
    });
});