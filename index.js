const fs = require("fs");
const inquirer = require("inquirer");

const engineer = [
  {
    type: `input`,
    name: `name`,
    message: `Please enter the engineer's name: `,
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the engineer's ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the engineer's email: ",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter the engineer's github username: ",
  },
];
const intern = [
  {
    type: `input`,
    name: `name`,
    message: `Please enter the intern's name: `,
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the intern's ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the intern's email: ",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter the intern's school name: ",
  },
];

function generateHTML() {
  `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;
}

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
        message: "Please enter the mamager's email: ",
      },
      {
        type: "input",
        name: "office",
        message: "Please enter the manager's office number: ",
      },
      {
        type: `checkbox`,
        name: `job`,
        message: `Please select the job title: `,
        choices: [`Engineer`, `Intern`],
      },
    ])
    .then((data) => {
      console.log(data);
      let choice = data.job
      console.log(choice);
      if (choice == 'Engineer') {
        inquirer.prompt(engineer).then((answers) => {
          
        });
      } else {
        inquirer.prompt(intern).then((answers) => {
          
          });
      }
      
    });
}
