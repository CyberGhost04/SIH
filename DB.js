const fs = require("node:fs");

const usersPath = "./data/users";

class DB {
  constructor() {
    this.users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
  }

  update() {
    this.users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
  }

  save() {
    fs.writeFileSync(usersPath, JSON.stringify(this.users));
  }
}

const db = new DB();

module.exports = db;
