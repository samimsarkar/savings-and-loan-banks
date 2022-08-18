//Steps 1: Add event listen to the deposit button

document.getElementById('deposit-btn').addEventListener('click', function () {
    //Step 2: get the deposit amount from the deposit input field

    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    console.log(newDepositAmount);
    if (isNaN(newDepositAmount)) {
        alert('Please Provide a Valid Number');
        return;
    }

    // console.log( typeof newDepositAmount);

    //Steps 3:  get the current deposit total amount
    //for non-input (element other then input, textarea) use innerText to get the text 

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //Steps 4: add numbers to set the deposit total
    currentDepositTotal = previousDepositTotal + newDepositAmount;
    // console.log(currentDepositTotal);
    depositTotalElement.innerText = currentDepositTotal;

    //steps 5: get balance from the current total
    const balenceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balenceTotalElement.innerText;
    const previousBanlanceTotal = parseFloat(previousBalanceTotalString);

    //Steps 6: calculate the current total balance

    const currentBalanceTotal = previousBanlanceTotal + newDepositAmount;
    // set the balence total
    balenceTotalElement.innerText = currentBalanceTotal;


    //Steps 7: Clear the deposit field
    depositField.value = '';
})