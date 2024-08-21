const express = require('express');
const DB = require("./DB");

const app = express();
const port = 8060;

app.use(express.json());

app.get('/', (req, res) => {
    
    DB.update();
    const products = DB.products;
    res.status(200).json(products);

});

app.put('/', async(req, res) => {
    const data = req.body;
    try{

        DB.update();
        DB.products.push(data);
        DB.save();
        res.status(200).json({scs : "true"});

    }catch(e){
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
