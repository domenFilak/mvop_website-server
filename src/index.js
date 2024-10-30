//

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:4200', // Allow only this origin to access the server
    methods: ['GET', 'POST'], // Allow only these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));
app.use(express.json());

//ENDPOINTS

app.post('/add', (req, res) => {
    console.log("Received JSON data:", req.body);
    res.status(200).send({msg: "Object added!"});
});

//

app.listen(PORT, () => {
    console.log("Server running on port="+PORT);
});