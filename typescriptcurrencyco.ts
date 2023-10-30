import inquirer from "inquirer";
async function myfunc() {
    const answer = await inquirer.prompt([
        {
            typr: "number",
            name: "currency_amount",
            message: "Enter currency amount to convert in rupies"
        },
        {
            type: "list",
            name: "operator",
            message: "Select in which you want to convert you currency",
            choices: ['Dollar', 'Rubble', 'Astralian Dollar'],
        },
    ]);
    const { currency_amount, operator } = answer;
    if (currency_amount && operator) {
        let result = 0;
        if (operator === "Dollar") {
            result = currency_amount * 275;
        }
        else if (operator === "Rubble") {
            result = currency_amount * 2.87;
        }
        else if (operator === "Astralian Dollar") {
            result = currency_amount * 176.62;
        }
        console.log(`you converted amount is ${result}`);
    }
}
async function start() {
    do {
        await myfunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue  press y"
        });
    } while (again.restart == "y" ||
        again.restart == "yes" ||
        again.restart == "YES");
}
start();
