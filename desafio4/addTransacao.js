const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };


  function createTransaction(type, value) {
    const transaction = {
        type: 'credit',
        value: 50.5
    }
    
    user.transactions.push(transaction)

    if (type === 'credit') {
        return user.balance += value
    } else {
        return user.balance -= value
    }    
  }
  
  createTransaction(user)

  console.log(user)