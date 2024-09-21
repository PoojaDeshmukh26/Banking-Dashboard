let balance = 1000;
//  function for the deposite amount
document.getElementById('deposit-button').addEventListener('click', function() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
        document.getElementById('deposit-amount').value = "";
    }else{
          alert("Please Enter a Valid Deposite Amount.")
        }
});


//  function for the withdraw amount
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount > balance) {
            alert('Insufficient funds');
          }else if(withdrawAmount==1000){
          withdrawAmount==balance
          alert("Please enter a valid amount.")
          document.getElementById("withdraw-amount").value=""
          }else {
            balance -= withdrawAmount;
            document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
        }
        document.getElementById('withdraw-amount').value = "";
    }
    else{
      alert("Please Enter a Valid Withdrawl Amount.")
    }
});

