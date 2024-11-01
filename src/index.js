
const mockCompanies = [];
const express = require('express');
const cors = require('cors');
const {body, validationResult, matchedData} = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:4200', // Allow only this origin to access the server
    methods: ['GET', 'POST'] // Allow specific headers
}));
app.use(express.json());


app.post('/add', (req, res) => {
    console.log("Received JSON data:", req.body);
    res.status(200).send({msg: "Object added!"});
});

app.get('/api/get', (req, res) => {
    return res.status(200).send(mockCompanies);
});

// TO DO

app.post('/api/post',

    body("rank")
        .notEmpty().withMessage("Rank je zahtevan.") 
        .isInt({ min: 1, max: 500 }).withMessage('Rank mora imeti vrednost med 1 and 500!'),

    (req, res) => {

    const result = validationResult(req);
    

    if (!result.isEmpty()){
        return res.status(400).send({errors: result.array()})
    }

    const data = matchedData(req);
    
    mockCompanies.push(data);
    return res.status(200).send({msg: "Company added."});
});


app.listen(PORT, () => {
    console.log("Server running on port="+PORT);
});