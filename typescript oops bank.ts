import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
import chalk from "chalk";

class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  mobnumber: number;
  accNumber: number;

  constructor(
    fname: string,
    lname: string,
    age: number,
    gender: string,
    mobnumber: number,
    accNumber: number
  ) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
    this.mobnumber = mobnumber;
    this.accNumber = accNumber;
  }
}

interface BankAccount {
  accNumber: number;
  balance: number;
}

class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];

  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }

  addAccount(obj: BankAccount) {
    this.account.push(obj);
  }

  trans(accobj: BankAccount) {
    let newAccounts = this.account.filter((acc) => acc.accNumber !== accobj.accNumber);
    this.account = [...newAccounts, accobj];
  }
}

// Creating an instance of Bank
let myBank = new Bank();

for (let i = 1; i <= 3; i++) {
  let fName = faker.name.firstName();
  let lName = faker.name.lastName();
  let num = parseInt(faker.phone.number("301####"));
  const cus = new Customer(fName, lName, 25 * i, "male", num, 1000 + i);
  myBank.addCustomer(cus);
  myBank.addAccount({ accNumber: cus.accNumber, balance: 100 * i });
}

async function bankservice(bank: Bank) {
  while (true) {
    let service = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "please select the service",
      choices: ["view Balance", "Cash withdraw", "Cash Deposit", "Exit"],
    });

    if (service.select === "Exit") {
      console.log("Exiting the banking service.");
      break;
    }

    if (service.select === "view Balance") {
      let res = await inquirer.prompt({
        type: "input",
        name: "number",
        message: "please enter your Account number;",
      });

      let account = myBank.account.find((acc) => acc.accNumber === parseInt(res.number));
      if (!account) {
        console.log(chalk.red.bold("Invalid Account number"));
      } else {
        let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
        console.log(`Dear ${chalk.green.italic(name?.lastName)} your accountBalance is ${chalk.bold.blueBright(account.balance)}`);
      }
    }

    if (service.select === "Cash withdraw") {
      let res = await inquirer.prompt({
        type: "input",
        name: "number",
        message: "please enter your Account number;",
      });

      let account = myBank.account.find((acc) => acc.accNumber === parseInt(res.number));
      if (!account) {
        console.log(chalk.red.bold("Invalid Account number"));
      } else {
        let ans = await inquirer.prompt({
          type: "number",
          message: "please enter amount",
          name: "rupee",
        });

        let newBalance = account.balance - ans.rupee;
        bank.trans({
          accNumber: account.accNumber,
          balance: newBalance,
        });
      }
    }

    if (service.select === "Cash Deposit") {
      let res = await inquirer.prompt({
        type: "input",
        name: "number",
        message: "please enter your Account number;",
      });

      let account = myBank.account.find((acc) => acc.accNumber === parseInt(res.number));
      if (!account) {
        console.log(chalk.red.bold("Invalid Account number"));
      } else {
        let ans = await inquirer.prompt({
          type: "number",
          message: "please enter amount",
          name: "rupee",
        });

        let newBalance = account.balance + ans.rupee;
        bank.trans({
          accNumber: account.accNumber,
          balance: newBalance,
        });
      }
    }
  }
}

// Calling the bankservice function

bankservice(myBank);
