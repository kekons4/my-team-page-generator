// Imports User defined classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Imports JS libraries
const fs = require("fs");
const inquirer = require("inquirer");

function generateHTML(templateArray) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./dist/styles.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Employee Directory</h1>
    </header>
    <section>
        <div>
            <h3>${templateArray[0].getName()}</h3>
        </div>
    </section>
</body>
</html>
    `;

  fs.writeFile("./dist/index.html", html, err => {
    err ? console.log(err) : console.log("Successfully written to index.html");
  });
}

// This function will gather the rest of the employees and store them in the
// templateArray to be used later to contruct the html
function addWorkers(templateArray) {
  //asks the user how many employees to add
  inquirer
    .prompt([
      {
        type: "input",
        message: "How many Employees do you want to add?",
        name: "count"
      }
    ])
    .then(response => {
      // based on how many exployees the user wants to add it will cycle through
      for (let i = 0; i < response.count; i++) {
        // Asks user for Engineer or Intern
        inquirer
          .prompt([
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
          ])
          .then(response => {
            // If choice equals Engineer
            if (response.choice === "Engineer") {
              inquirer
                .prompt([
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
                ])
                .then(response => {
                  templateArray.push(
                    new Engineer(
                      response.engineerName,
                      response.engineerID,
                      response.engineerEmail,
                      response.engineerGithub
                    )
                  );
                });
            } else if (response.choice === "Intern") {
              inquirer
                .prompt([
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
                ])
                .then(response => {
                  templateArray.push(
                    new Intern(
                      response.internName,
                      response.internID,
                      response.internEmail,
                      response.internSchool
                    )
                  );
                });
            }
          });
      }
      generateHTML(templateArray);
    });
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
