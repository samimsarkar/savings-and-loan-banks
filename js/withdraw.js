/**
 1. add event handler with the withdraw button
 2. get the withdraw amount from the withdraw input field
 2-5. also make sure to convert the input into a number by using parseFloat 
 3. Get previous withdraw total 
 4. calculate total withdraw amount
 4-5. set total withdraw amount
 5. get the previous balance total 
 6. calculate new balance total
 6-5. set the new balance total
  7. clear the input field
 * 
 */
//steps- 01
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // step -02
    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);
    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a Valid Number');
        return;
    }

    // Step- 03 

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Steps- 7 
    withdrawField.value = '';

    //Steps -5
    const balenceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balenceTotalElement.innerText;
    const previousBanlanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBanlanceTotal) {
        alert('baap er bank e etto taka nai');
        return;
    }
    //Steps - 4

    currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //steps -6
    const newBalanceTotal = previousBanlanceTotal - newWithdrawAmount;

    balenceTotalElement.innerText = newBalanceTotal;






})