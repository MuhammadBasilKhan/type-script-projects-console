import inquirer from 'inquirer';

class ToDoList {
    async func() {
        let todo: string[] = [];
        let loop = true;
        
        while (loop) {
            const answer: {
                ToDo: string,
                addmore: boolean,
            } = await inquirer.prompt([
                {
                    name: 'ToDo',
                    type: 'input',
                    message: 'What do you want to add to your todo?',
                },
                {
                    type: 'confirm',
                    name: 'addmore',
                    message: 'Do you want to add more todo?',
                    default: false,
                },
            ]);
            
            const { ToDo, addmore } = answer;
            loop = addmore;
            
            if (ToDo) {
                todo.push(ToDo);
            } else {
                console.log("Kindly enter a valid input.");
            }
        }
        
        console.log(todo);
    }
}

const todoList = new ToDoList();
todoList.func();
