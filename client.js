const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

class Employee {
  constructor (nameIn, empNum, salary, rating) {
      this.name = nameIn;
      this.empNum = empNum;
      this.salary = salary;
      this.rating = rating;

  }
}

let newEmployeeList = [];

function upgradeEmployees () {
  for (var i = 0; i < employees.length; i++) {
    let upgradedEmployee = new Employee (employees[i].name, employees[i].employeeNumber,
      employees[i].annualSalary, employees[i].reviewRating);
      newEmployeeList.push(upgradedEmployee);
  }
}

upgradeEmployees(employees);
console.log(newEmployeeList);



//console.log(bonusCalculator(newEmployeeList[0]));



function finalSalary (newEmployeeList) {
  for (let i = 0; i < newEmployeeList.length; i++) {
  let bonusPercentage = bonusCalculator(newEmployeeList[i])/100;
  let bonusPay = bonusPercentage * newEmployeeList[i].salary;
  let netPay = bonusPay + parseInt(newEmployeeList[i].salary);
   }
}

finalSalary (newEmployeeList);

function bonusCalculator (x) {
//  console.log('bonus for number length', numberLength(x));
//  console.log('bonus for rating',ratingToBonus(x));
//  console.log('bonus for too much money',tooMuchMoney(x));
  let bonusValue = numberLength(x) + ratingToBonus(x) + tooMuchMoney(x);
  if (bonusValue < 0) {
    return 0;
  } else if (bonusValue > 13) {
    return 13;
  } else {
  return bonusValue;}
}

function numberLength (xyz) {
    if (xyz.empNum.length === 4) {
      return 5;
    } else {
      return 0;
    }
}

function ratingToBonus (abc) {
  if (abc.rating <= 2) {
    return 0;
  }
  else if (abc.rating === 3) {
    return 4;
  }
  else if (abc.rating === 4) {
    return 6;
  }
  else if (abc.rating === 5) {
    return 10;
  }
}

function tooMuchMoney (sal) {
  if (sal.salary > 65000) {
    return -1;
  }
  else {
    return 0;
  }
}

function classEdit() {
  Employee.netSalary = finalSalary(newEmployeeList[0]);
}

/*  console.log(newEmployeeList[i].name + 's original salary is: ', newEmployeeList[i].salary);
  console.log(newEmployeeList[i].name + 's bonus percentage is ',
  bonusCalculator(newEmployeeList[i]), "%");
  console.log(newEmployeeList[i].name + 's  net salary: ', netPay);
  */
