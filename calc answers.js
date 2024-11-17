document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('compoundInterestBtn').addEventListener('click', calculateCompoundInterest);
    document.getElementById('retirementBtn').addEventListener('click', calculateRetirement);
    document.getElementById('assetAllocationBtn').addEventListener('click', calculateAssetAllocation);
    document.getElementById('contributionsBtn').addEventListener('click', calculateContributions);
});

function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const compound = parseFloat(document.getElementById('compound').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const amount = principal * Math.pow((1 + rate/compound), (compound * time));
    const interest = amount - principal;

    document.getElementById('compoundResult').innerHTML = `
        Final Amount: $${amount.toFixed(2)}<br>
        Total Interest: $${interest.toFixed(2)}
    `;
}

function calculateRetirement() {
    const annualExpenses = parseFloat(document.getElementById('annualExpenses').value);

    if (isNaN(annualExpenses)) {
        alert('Please enter a valid number for annual expenses.');
        return;
    }

    const retirementNeeds = annualExpenses * 25;

    document.getElementById('retirementResult').innerHTML = `
        You need approximately $${retirementNeeds.toFixed(2)} to retire based on the 25x rule.
    `;
}

function calculateAssetAllocation() {
    const age = parseInt(document.getElementById('age').value);

    if (isNaN(age) || age < 0 || age > 120) {
        alert('Please enter a valid age between 0 and 120.');
        return;
    }

    const equityAllocation = Math.max(0, 120 - age);

    document.getElementById('assetAllocationResult').innerHTML = `
        Recommended equity allocation: ${equityAllocation}%<br>
        Recommended bond allocation: ${100 - equityAllocation}%
    `;
}

function calculateContributions() {
    const salary = parseFloat(document.getElementById('salary').value);

    if (isNaN(salary)) {
        alert('Please enter a valid salary.');
        return;
    }

    const maxAnnual401k = 19500; // 2021 limit
    const maxAnnualIRA = 6000; // 2021 limit

    const recommended401k = Math.min(salary * 0.15, maxAnnual401k);
    const recommendedIRA = Math.min(salary * 0.05, maxAnnualIRA);

    document.getElementById('contributionsResult').innerHTML = `
        Recommended 401(k) contribution: $${recommended401k.toFixed(2)} per year<br>
        Recommended IRA contribution: $${recommendedIRA.toFixed(2)} per year
    `;
}
   alert("JavaScript file loaded!");
