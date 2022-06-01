const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateManagerCard = require("./lib/cards/generateManagerCard");
const generateEngineerCard = require("./lib/cards/generateEngineerCard");
const generateInternCard = require("./lib/cards/generateInternCard");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

init();

function init() {
  inquirer
    .prompt([
      {
        type: `input`,
        name: `name`,
        message: `Please enter the team's manager name: `,
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email: ",
      },
      {
        type: "input",
        name: "office",
        message: "Please enter the manager's office number: ",
      },
      {
        type: "loop",
        name: "employees",
        message: "add another employee?",
        questions: [
          {
            type: "list",
            message: "What type of employee are you adding?",
            name: "type",
            choices: ["Engineer", "Intern"],
          },
          {
            type: "input",
            message: "What is the employees name?",
            name: "name",
          },
          {
            type: "input",
            message: "What is the employees ID number?",
            name: "id",
          },
          {
            type: "input",
            message: "What is the employees email address?",
            name: "email",
          },
          {
            type: "input",
            message: "What is the employees github username?",
            name: "github",
            when: (employee) => employee.type === "Engineer",
          },
          {
            type: "input",
            message: "What is the name of the employees school?",
            name: "school",
            when: (employee) => employee.type === "Intern",
          },
        ],
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      const employees = data.employees;
      const engineerArray = [];
      const internArray = [];

      for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        if (employee.type === 'Engineer') {
          const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
          engineerArray.push(engineer);
        } else {
          const intern = new Intern(employee.name, employee.id, employee.email, employee.school);
          internArray.push(intern);
        }
      }

      const managerCard = generateManagerCard(manager);
      const engineerCard = generateEngineerCard(engineerArray);
      const internCard = generateInternCard(internArray);

    });
}
