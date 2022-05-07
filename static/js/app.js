let itemCost = document.querySelector('#item-cost')
let itemName = document.querySelector('#item-name')
let tableBody = document.querySelector('tbody');

calculateTotalExpense = tableBody => {
  let totalExpense = 0
  for(let i = 0; i < tableBody.children.length; i++) {
    let costRow = tableBody.children.item(i)
    let costValue = parseInt(costRow.children.item(1).textContent,10)
    totalExpense += costValue
  }
  return totalExpense
}

createTotalExpenseRow = tableBody => {
  let tableRow = document.createElement('tr')
  let itemName = document.createElement('td')
  itemName.textContent = 'TOT'
  let itemCost = document.createElement('td')
  itemCost.textContent = calculateTotalExpense(tableBody)
  tableRow.appendChild(itemName)
  tableRow.appendChild(itemCost)
  tableBody.appendChild(tableRow)
}

createExpenseRow = (tableBody,expenseName,expenseCost) => {
  let tableRow = document.createElement('tr')
  let itemName = document.createElement('td')
  itemName.textContent = expenseName
  let itemCost = document.createElement('td')
  itemCost.textContent = expenseCost
  tableRow.appendChild(itemName)
  tableRow.appendChild(itemCost)
  tableBody.appendChild(tableRow)
}


document.querySelector('.add-expense').addEventListener('click', event => {
  //handle click
  let totTableRow = tableBody.children.item(tableBody.children.length - 1)
  if (totTableRow.children.item(0).textContent == 'TOT') {
    tableBody.removeChild(totTableRow)
    createExpenseRow(tableBody,itemName.value,itemCost.value);
  } else {
    createExpenseRow(tableBody,itemName.value,itemCost.value);
  }
  createTotalExpenseRow(tableBody)
})

