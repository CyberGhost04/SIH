const express = require('express');
const DB = require("./DB");

const app = express();
const port = 8060;

app.get('/', (req, res) => {
    
    DB.update();
    const users = DB.users;
    res.status(200).json(users);

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
