const fs = require("node:fs");

const productsPath = "./data/products";

class DB {
  constructor() {
    this.products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  }

  update() {
    this.products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  }

  save() {
    fs.writeFileSync(productsPath, JSON.stringify(this.products));
  }
}

const db = new DB();

module.exports = db;
