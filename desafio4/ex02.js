const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

  function createTransaction() {
    let transaction = [
        {
            type: 'credit',
            value: 50.5
        },

        { 
            type: "credit", 
            value: 50 
        },

        { 
            type: "credit", 
            value: 120 
        },

        { 
            type: "debit",
            value: 80 
        },

        { 
            type: "debit", 
            value: 30 
        }
    ]
         for(let i = 0; i < transaction.length; i++)   
            user.transactions.push(transaction[i])
     
  }
  

  createTransaction(user.transactions[0])
  const transaction = user.transactions[0].type === 'credit'
    if (transaction) {
        user.balance += user.transactions[0].value
    } else {
        user.balance -= user.transactions[0].value
    }

//   function getHigherTransactionByType() {
   

//   }

//   getHigherTransactionByType()
  
  console.log(user)











// createTransaction({ type: "credit", value: 50 });
// createTransaction({ type: "credit", value: 120 });
// createTransaction({ type: "debit", value: 80 });
// createTransaction({ type: "debit", value: 30 });

// console.log(user.balance); // 60

// getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
// getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

// getAverageTransactionValue(); // 70

// getTransactionsCount(); // { credit: 2, debit: 2 }