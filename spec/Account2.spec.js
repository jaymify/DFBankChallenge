import Account2 from "../src/Account2.js";

describe("US4-01 - Account Array Functionality", () => {
    it('should add a deposit to the states array', () => {
        const account = new Account2();
        const depositObj = { value: 100, date: new Date() };

        account.Deposit(depositObj);

        expect(account.states.length).toBe(1);
        expect(account.states[0].value).toEqual(depositObj.value);
    });
});

describe("US4-02 - Account Array Functionality", () => {
    it('should add a date to the states array', () => {
        const account = new Account2();
        const depositObj = { date: new Date() };

        account.Deposit(depositObj);

        expect(account.states.length).toBe(1);
        expect(account.states[0].date).toEqual(depositObj.date);
    });
});

describe("US4-03 - Account Array Functionality", () => {
    it('should update the balance for each entry', () => {
        const account = new Account2();
        const depositObj = { value: 100 };

        account.Deposit(depositObj);

        expect(account.balance).toBe(100);
    });
});


describe("US5-01 - Account Array Functionality: Withdraw", () => {
    it('should log each withdrawal', () => {
        const account = new Account2(100); // Initial balance
        const withdrawObj = { value: 50 };

        account.Withdraw(withdrawObj);

        expect(account.states.length).toBe(1);
        expect(account.states[0]).toEqual(withdrawObj);
        expect(account.balance).toBe(50); // Asserts updated balance
    });
});

describe("US5-02 - Account Array Functionality: Withdraw", () => {
    it('should log multiple withdrawals to state array', () => {
        const account2 = new Account2(150); // Initial balance
        const withdrawObj1 = { value: 50 };
        const withdrawObj2 = { value: 50 };

        account2.Withdraw(withdrawObj1);
        account2.Withdraw(withdrawObj2);

        expect(account2.states.length).toBe(2);
        expect(account2.states[0]).toEqual(withdrawObj1);
        expect(account2.states[1]).toEqual(withdrawObj2);
        expect(account2.balance).toBe(50); // Asserts updated balance
    });
});

xdescribe("US6-01 - Print Statement Functionality", () => {
    it('should print a header row', () => {
        const account3 = new Account2();
        const statement = account3.printTransaction();

        expect(statement).toContain("date      || credit  || debit  || balance");
    });
});