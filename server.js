const express = require('express');
const DB = require("./DB");

const app = express();
const port = 8060;

app.use(express.json());

app.get('/', (req, res) => {
    
    DB.update();
    const users = DB.users;
    res.status(200).json(users);

});

app.put('/', async(req, res) => {
    const data = req.body;
    try{

        DB.update();
        DB.users.push(data);
        DB.save();
        res.status(200).json({scs : "true"});

    }catch(e){
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
