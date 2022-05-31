const fs = require("fs");
const inquirer = require("inquirer");
const { off } = require("process");

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
    name: "github",
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

const generateHTML = ({ name, id, email, office }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
      <li>${name}</li>
      <li>${id}</li>
      <li>${email}</li>
      <li>${office}</li>
    </ul>
</body>
</html>`;

init();


function printMan({ name, id, email, office }) {
  const teamManager = {
    name: name,
    id: id,
    email: email,
    office: office,
  };
  console.log(teamManager);
}

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
        type: `checkbox`,
        name: `job`,
        message: `Please select the job title: `,
        choices: [`Engineer`, `Intern`],
      },
    ])
    .then((data) => {
      const htmlFileGeneration = generateHTML(data);
      fs.writeFile("index.html", htmlFileGeneration, (err) =>
        err
          ? console.log(err)
          : console.log("\nSuccessfully created index.html!")
      );
      printMan(data);
      const choice = data.job;
      if (choice == "Engineer") {
        inquirer.prompt(engineer).then((answers) => {
          console.log(answers);
        });
      } else {
        inquirer.prompt(intern).then((answers) => {
          console.log(answers);
        });
      }
    });
}
