const tipCalc =()=> { // when Calculate is clicked
    event.preventDefault();

    // the outputs to display on the receipt
    let subOutput = document.getElementById('subtotalOutput');
    let tipOutput = document.getElementById('tipOutput');
    let tipAmountOutput = document.getElementById('tipAmountOutput');
    let totalBillOutput = document.getElementById('totalBill');
    let slogan = document.getElementById('slogan');

    // the data from the form
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let tip = document.getElementById('tip').value;
    let otherAmount = parseFloat(document.getElementById('otherAmount').value);
    
    // the logic
    let tipAmount = 0;
    if (tip === "0"){
        tipAmount = otherAmount;
    } else {
        tipAmount = subtotal * tip;
        tipOutput.innerText = tip;
    }

    tipAmount = Number(tipAmount);
    totalBill = subtotal + tipAmount;

    subOutput.innerText = "$" + subtotal.toFixed(2);
    tipAmountOutput.innerText = "$" + tipAmount.toFixed(2);
    totalBillOutput.innerText = "$" + totalBill.toFixed(2);
    slogan.innerText = "Thanks for eating at Satch's where an empty plate is a happy plate!";

}