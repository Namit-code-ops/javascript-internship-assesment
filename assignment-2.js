
const billInput = prompt("Enter the bill amount:");
const tipInput = prompt("Enter the tip percentage:");

const billAmount = Number(billInput);
const tipPercentage = Number(tipInput);

if (
    billInput === null ||
    tipInput === null ||
    billInput.trim() === "" ||
    tipInput.trim() === "" ||
    !Number.isFinite(billAmount) ||
    !Number.isFinite(tipPercentage) ||
    billAmount < 0 ||
    tipPercentage < 0
) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    const tipAmount = billAmount * tipPercentage / 100;
    const totalBill = billAmount + tipAmount;

    console.log(`Bill Amount: $${billAmount.toFixed(2)}`);
    console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
    console.log(`Total Bill: $${totalBill.toFixed(2)}`);
}
