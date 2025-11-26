function createBankAccount() {
    let balance = 0;                 
    let transactionHistory = [];     

    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push(`Deposited: ${amount}`);
                console.log(`Deposited: ${amount}`);
            } else {
                console.log("Invalid deposit amount");
            }
        },

        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            } else {
                console.log("Insufficient balance");
            }
        },

        getBalance: function () {
            console.log(`Current balance: ${balance}`);
            return balance;
        },

        getHistory: function () {
            console.log("Transaction History:", transactionHistory);
            return transactionHistory;
        }
    };
}




const account = createBankAccount();

account.deposit(500);     
account.withdraw(200);    
account.withdraw(400);    

console.log(account.balance);   


account.getBalance();     
account.getHistory();    
