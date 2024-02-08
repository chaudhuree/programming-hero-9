// task one: HELP THE ZOO MANAGER TO CALCULATE EXPENSES
function calculateMoney(ticketSale) {
  const ticketPrice = 120;
  const watchmanSalary = 500;
  const foodCost = 50;
  const totalNumberOfStaff = 8;
  if(ticketSale === 0) {
    return "Invalid input"
  }else if(ticketSale < 0) {
    return "Hey, you have put a negative value. Please put a positive value"
  }
  const totalIncome = ticketSale * ticketPrice;
  const totalExpense = watchmanSalary + (foodCost * totalNumberOfStaff);
  const totalProfit = totalIncome - totalExpense;
  return totalProfit;
}

// task two: GOOD NAME, BAD NAME
function checkName(name) {
  const unsupportedCharacters=["a", "y", "i" , "e" , "o" , "u", "w"];
  if(typeof name !== "string") {
    return "Invalid input"
  }
  const lastCharacter = name.toLowerCase().charAt(name.length - 1);
  console.log('lastCharacter:', lastCharacter);
  
  return unsupportedCharacters.includes(lastCharacter) ? "Good Name" : "Bad Name";
  
}

