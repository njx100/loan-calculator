const loanAmountEl = document.getElementById("loan-amount");
const interestRateEl = document.getElementById("interest-rate");
const monthsToPayEl = document.getElementById("months-to-pay");
const monthlyPaymentEl = document.getElementById("monthly-payment");

function updatePayment() {

    const monthlyPayment = ((loanAmountEl.value) * (1+((interestRateEl.value) / 100)) / (monthsToPayEl.value)).toFixed(2);
    monthlyPaymentEl.innerText = `$${monthlyPayment}`;
};

updatePayment();
// loanAmountEl.addEventListener("change", updatePayment);
// interestRateEl.addEventListener("change", updatePayment);
// monthsToPayEl.addEventListener("change", updatePayment);