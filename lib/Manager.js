const Employee = require("./Employee");
// import Employee from "./Employee";

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    super.getRole();
    return `Manager`;
  }
}

module.exports = Manager;
