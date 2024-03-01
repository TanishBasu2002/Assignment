const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./mongo/db')

app.use(express.json());
app.use(cors());
const url = process.env.MONGODB_URL
mongoose.connect('mongodb+srv://tanishbasu50:AoT8f9uRm97x5BYK@cluster0.pmzsx2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });

app.post('/insert', async(req, res) => {
    const Email = req.body.email

    const formData = new User({
        email: Email,
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});