// problem one: HELP THE ZOO MANAGER TO CALCULATE EXPENSES
function calculateMoney(ticketSale) {
  const ticketPrice = 120;
  const watchmanSalary = 500;
  const foodCost = 50;
  const totalNumberOfStaff = 8;
  if (ticketSale === 0) {
    return "Invalid input";
  } else if (ticketSale < 0) {
    return "Hey, you have put a negative value. Please put a positive value";
  }
  const totalIncome = ticketSale * ticketPrice;
  const totalExpense = watchmanSalary + foodCost * totalNumberOfStaff;
  const totalProfit = totalIncome - totalExpense;
  return +totalProfit;
}

// problem two: GOOD NAME, BAD NAME
function checkName(name) {
  const unsupportedCharacters = ["a", "y", "i", "e", "o", "u", "w"];
  if (typeof name !== "string") {
    return "Invalid input";
  }
  const lastCharacter = name.toLowerCase().charAt(name.length - 1);
  return unsupportedCharacters.includes(lastCharacter)
    ? "Good Name"
    : "Bad Name";
}

// problem three: VIRUS IN MY ARRAY
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return `we only accept array as input, not ${typeof array}`;
  }
  return array.filter((item) => typeof item === "number" && !isNaN(item));
}

// problem four: MAKE A GREAT PASSWORD
function password(obj) {
  const requiredKeys = ["name", "birthYear", "siteName"];
  const inputObjectKeys = Object.keys(obj);
  const isAllKeysPresent = requiredKeys.every((key) =>
    inputObjectKeys.includes(key)
  );
  if (!isAllKeysPresent || obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  const capitalizeFirstLetterOfSiteName =
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

  return `${capitalizeFirstLetterOfSiteName}#${obj.name?.toLowerCase()}@${
    obj.birthYear
  }`;
}

// problem five: MONTHLY SAVINGS OF A FREELANCER

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  const incomeArrAfterTaxCut = arr.map((income) => {
    if (Number(income) >= 3000) {
      return income - income * 0.2;
    }
    return income;
  });
  const saving =
    Number(incomeArrAfterTaxCut.reduce((acc, income) => acc + income, 0) - livingCost);

  return saving < 0 ? "earn more" : saving;
}