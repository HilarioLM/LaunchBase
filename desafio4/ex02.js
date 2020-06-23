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
  

//   createTransaction(user.transactions[0])
//   for(let a = 0; a < user.transactions.length; a++){
//   const transaction = (user.transactions[a].type === 'credit' || user.transactions[a].type === 'debit' )
//     if (transaction) {
//         user.balance += user.transactions[a].value
//     } else {
//         user.balance -= user.transactions[a].value
//     }
//   }

  function getHigherTransactionByType(credito, debito) {
    const maiorValor = getHigherTransactionByType(credito)
    const menorValor = getHigherTransactionByType(debito)
    
    return maiorValor, menorValor
  }

  getHigherTransactionByType(user.transactions[0])
  for(let j = 0; j < user.transactions.length; j++) {
    if(maiorValor === 'credit') {
        console.log(user.transactions[j].value)
    }
}
  
//   console.log(credito)











// createTransaction({ type: "credit", value: 50 });
// createTransaction({ type: "credit", value: 120 });
// createTransaction({ type: "debit", value: 80 });
// createTransaction({ type: "debit", value: 30 });

// console.log(user.balance); // 60

// getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
// getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

// getAverageTransactionValue(); // 70

// getTransactionsCount(); // { credit: 2, debit: 2 }