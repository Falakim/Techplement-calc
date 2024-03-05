let expression = "";

function clearDisplay() {
    expression = "";
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}



function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('result').textContent = 'Result: ' + result;

        // Store the calculation expression and result in local storage
        const calculation = expression + ' = ' + result;
        storeHistory(calculation);
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
    }
}

function storeHistory(calculation) {
    // Retrieve existing history or initialize as an empty array
    let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    // Add the calculation to history array
    history.push(calculation);

    // Store updated history array in local storage
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
}

function updateDisplay() {
    document.getElementById('display').value = expression;
    document.getElementById('result').textContent = 'Result: ';
}

function viewHistory() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';

    if (history.length === 0) {
        historyDiv.textContent = 'No history found';
    } else {
        const historyList = document.createElement('ul');
        history.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            historyList.appendChild(listItem);
        });
        historyDiv.appendChild(historyList);
    }
}

function appendToDisplay(value) {
    expression += value;
    updateDisplay();
}