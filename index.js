const express = require('express');

const app = express();

const productRoute = require('./routes/products');
const categoryRoute = require('./routes/categories');
const booksRoute = require('./routes/books');
const studentRoute = require('./routes/students');
const courseRoute = require('./routes/course');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next(); 
});

app.get("/", (req, res) => {
    res.send("Welcome to the Student & Course Portal API!");
});

app.use(productRoute);

app.use(categoryRoute);

app.use(booksRoute);

app.use('/students', studentRoute);

app.use('/course', courseRoute);



app.use('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen('4000', () => {
    console.log(`Server is up and running on port 4000! Ready to handle requests.`);
});
