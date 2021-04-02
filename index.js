// Imports User defined classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Imports JS libraries
const fs = require("fs");
const inquirer = require("inquirer");

function generateHTML(templateArray) {
  const employeeCards = [];
  templateArray.forEach(worker => {
    // if Manager
    if(worker.getRole() === "Manager") {
      employeeCards.push(`<div class="card">
        <div class="card-header">
            <h1>${worker.getName()}</h1>
            <span>${worker.getRole()}</span>
        </div>
        <div class="card-body">
            <span>Employee ID: ${worker.getId()}</span>
            <span>Employee Email: ${worker.getEmail()}</span>
            <span>Office Number: ${worker.officeNumber}</span>
        </div>
      </div>`);
    // If engineer
    } else if( worker.getRole() === "Engineer") {
      employeeCards.push(`<div class="card">
        <div class="card-header">
            <h1>${worker.getName()}</h1>
            <span>${worker.getRole()}</span>
        </div>
        <div class="card-body">
            <span>Employee ID: ${worker.getId()}</span>
            <span>Employee Email: ${worker.getEmail()}</span>
            <span>Github Username: ${worker.getGithub()}</span>
        </div>
      </div>`);
    // if Intern
    } else {
      employeeCards.push(`<div class="card">
        <div class="card-header">
            <h1>${worker.getName()}</h1>
            <span>${worker.getRole()}</span>
        </div>
        <div class="card-body">
            <span>Employee ID: ${worker.getId()}</span>
            <span>Employee Email: ${worker.getEmail()}</span>
            <span>School: ${worker.getSchool()}</span>
        </div>
      </div>`);
    }
  });
  //   const employeeCardContainer = ``;
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./styles.css">
    <title>My Team Page Generator</title>
</head>
<body>
    <header>
        <h1>Employee Directory</h1>
    </header>
    <section>
    `;

    employeeCards.forEach(card => {
      html += card;
    });

    html += `
  </section>
</body>
</html>
    `;
  // Write the template into html file
  fs.writeFile("./dist/index.html", html, err => {
    err ? console.log(err) : console.log("Successfully written to index.html");
  });
}

// Async's asks the user the info of the other employees
async function addTheRest(templateArray, count) {
  // based on how many exployees the user wants to add it will cycle through
  for (let i = 0; i < count; i++) {
    // Asks user for Engineer or Intern
    const test = await inquirer.prompt([
      {
        type: "list",
        choices: [
          "Engineer",
          new inquirer.Separator(),
          "Intern",
          new inquirer.Separator(),
          "None",
          new inquirer.Separator()
        ],
        message: "Would you like to add an Engineer or an Intern?",
        name: "choice"
      }
    ]);
    // If choice equals Engineer
    if (test.choice === "Engineer") {
      const engineerRes = await inquirer.prompt([
        {
          type: "input",
          message: "Engineers Name: ",
          name: "engineerName"
        },
        {
          type: "input",
          message: "Engineer Employee ID: ",
          name: "engineerID"
        },
        {
          type: "input",
          message: "Engineer email: ",
          name: "engineerEmail"
        },
        {
          type: "input",
          message: "Engineer Github username: ",
          name: "engineerGithub"
        }
      ]);

      templateArray.push(
        new Engineer(
          engineerRes.engineerName,
          engineerRes.engineerID,
          engineerRes.engineerEmail,
          engineerRes.engineerGithub
        )
      );
    } else if (test.choice === "Intern") {
      const internRes = await inquirer.prompt([
        {
          type: "input",
          message: "Interns Name: ",
          name: "internName"
        },
        {
          type: "input",
          message: "Interns Employee ID: ",
          name: "internID"
        },
        {
          type: "input",
          message: "Interns email: ",
          name: "internEmail"
        },
        {
          type: "input",
          message: "Interns School",
          name: "internSchool"
        }
      ]);
      templateArray.push(
        new Intern(
          internRes.internName,
          internRes.internID,
          internRes.internEmail,
          internRes.internSchool
        )
      );
    }
  }
  // send all the employee array to generateHtml fucntion
  generateHTML(templateArray);
}

// This function will gather the rest of the employees and store them in the
// templateArray to be used later to contruct the html
async function addWorkers(templateArray) {
  //asks the user how many employees to add
  const count = await inquirer.prompt([
    {
      type: "input",
      message: "How many Employees do you want to add?",
      name: "count"
    }
  ]);

  addTheRest(templateArray, count.count);
}

// Get Manager information
inquirer
  .prompt([
    {
      type: "input",
      message: "Managers Name: ",
      name: "managerName"
    },
    {
      type: "input",
      message: "Manager Employee ID: ",
      name: "managerID"
    },
    {
      type: "input",
      message: "Managers email: ",
      name: "managerEmail"
    },
    {
      type: "input",
      message: "Managers Office Number: ",
      name: "managerOfficeNum"
    }
  ])
  .then(response => {
    const templateArray = [];
    //Create Manager
    const manager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerOfficeNum
    );
    templateArray.push(manager);
    addWorkers(templateArray);
  });
