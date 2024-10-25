


// //  functions for login and signup
function SignupModal() {
  document.getElementById('signupModal').style.display = 'block';
}

function SigninModal() {
  document.getElementById('signinModal').style.display = 'block';
}








// Initial balance
let balance = 1000;

// Function for user signup
document.getElementById('signup-button').addEventListener('click', function() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        const userInfo = { username, password };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      alert('Signup successful! You can now sign in.');
      console.log(userInfo)
      closeModal(); // Close the signup modal
    } else {
        alert('Please enter valid username and password.');
    }
});

// Function for user sign-in
document.getElementById('signin-button').addEventListener('click', function() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

  const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
// console.log(storedUserInfo)
  if ( (username !== storedUserInfo.username ) && (storedUserInfo.password !== password)) {
      localStorage.setItem('authenticated', 'true'); // Mark user as authenticated
      
        // closeModal(); // Close the sign-in modal
        document.getElementById('balance').innerText = `$${balance.toFixed(2)}`; // Display balance after sign-in
    // alert('Sign-in successful!');
    
   
    } else {
        alert('Invalid username or password.');
    }
});

// Function for signing out
document.getElementById('signout-button').addEventListener('click', function () {
  
    localStorage.removeItem('authenticated'); // Remove authentication flag
    alert('You have been signed out.');
    balance = 1000; // if user signout initial balence will be display
    document.getElementById('balance').innerText = `$${balance.toFixed(2)}`; // Reset displayed balance
    closeModal(); // Close any open modals 
});


// Function for depositing amount
document.getElementById('deposit-button').addEventListener('click', function() {
    if (localStorage.getItem('authenticated') === 'true') {
        const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
        if (!isNaN(depositAmount) && depositAmount > 0) {
            balance += depositAmount;
            document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
            document.getElementById('deposit-amount').value = "";
        } else {
            alert("Please enter a valid deposit amount.");
            document.getElementById('deposit-amount').value = "";
        }
    } else {
      alert('You must be signed in to deposit money.');
      document.getElementById('deposit-amount').value = "";
      
    }
});

// Function for withdrawing amount
document.getElementById('withdraw-button').addEventListener('click', function() {
    if (localStorage.getItem('authenticated') === 'true') {
        const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            if (withdrawAmount > balance) {
                alert('Insufficient funds');
            } else if (withdrawAmount === 1000) {
                alert("Please enter a valid amount.");
                document.getElementById("withdraw-amount").value = "";
            } else {
                balance -= withdrawAmount;
                document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
            }
            document.getElementById('withdraw-amount').value = "";
        } else {
            alert("Please enter a valid withdrawal amount.");
            document.getElementById('withdraw-amount').value = "";
        }
    } else {
      alert('You must be signed in to withdraw money.');
      document.getElementById('withdraw-amount').value = "";
      
    }
});

// Functions for modals 
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal() {
    const modals = ['signinModal', 'signupModal'];
    modals.forEach(modalId => {
        document.getElementById(modalId).style.display = 'none';
    });
}

function displaySignupModal() {
    closeModal();
    showModal('signupModal');
}

function displaySignInModal() {
    closeModal();
    showModal('signinModal');
}

