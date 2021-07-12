window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = {amount: 10000, years: 20, rate: 2.5};
  let amount = document.getElementById("loan-amount");
  amount.value = values.amount;
  let years = document.getElementById("loan-years");
  years.value = values.years;
  let rate = document.getElementById("loan-rate");
  rate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let getCurrentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = Math.floor(values.years * 12);
  let monthly = (values.rate / 100) / 12;
  return ((monthly * values.amount) / (1 - Math.pow((1 + monthly), - i))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let newMonthly = document.getElementById('monthly-payment');
  newMonthly.innerText = '$' + monthly;
}
