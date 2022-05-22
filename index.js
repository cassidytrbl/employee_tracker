const inquirer = require("inquirer");

const question = {
  type: "list",
  name: "Position",
  message: "What would you like to do?",
  choices: [
    "View all Roles",
    "View all Employees",
    "View all Departments",
    "Add a Department",
    "Add a Role",
    "Add an Employee",
    "Update an Employee Role",
    "Quit",
  ],
};

function init() {
  inquirer.prompt(question).then((answer) => {
    console.log(answer);
    switch (answer.Position) {
      case "View all Roles":
        viewRoles();
        break;
      case "View all Departments":
        viewDepartments();
        break;
      case "View all Employees":
        viewEmployees();
        break;
      case "Add a Department":
        addDepartments();
        break;
      case "Add a Role":
        addRoles();
        break;
      case "Add an Employee":
        addEmployees();
        break;
      case "Update an Employee Role":
        updateEmployees();
        break;
      default:
        quit();
        break;
    }
  });
}

function viewEmployees() {}
function viewRoles() {}
function viewDepartments() {}
function addRoles() {}
function addDepartments() {}
function addEmployees() {}
function updateEmployees() {}
function quit() {
  console.log("application closing");
  process.exit();
}

init();
