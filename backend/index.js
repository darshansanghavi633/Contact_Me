const express = require('express');
const app = express();
const cors = require("cors");
const Feedback = require('./db/Feedback');
require('./db/config');

app.use(cors());
app.use(express.json());

app.post('/feedback',async (req,res)=>{
    let message = new Feedback(req.body);
        let result = await message.save();
        res.send(result);
     });


app.listen(5000);