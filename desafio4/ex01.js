const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

//Comece criando um objeto com o nome do usuário, suas transações e saldo

  function createTransaction() {
    let transaction = {
        type: 'credit',
        value: 50.5
    } 
    
    user.transactions.push(transaction)
     
  }

 createTransaction(user.transactions[0])

 const transaction = user.transactions[0].type === 'credit'
    if (transaction) {
        user.balance += user.transactions[0].value
    } else {
        user.balance -= user.transactions[0].value
    }
    console.log(user)
//   console.log(user)