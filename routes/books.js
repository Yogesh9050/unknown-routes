const express = require('express');

const router = express.Router();

router.get('/books', (req, res) => {
    res.send(
        `
        <h2>Add a Book</h2>
        <form action="/books" method="POST">
            <label for="title">Book Title:</label>
            <input type="text" id="title" name="title" required><br><br>
            
            <label for="author">Author:</label>
            <input type="text" id="author" name="author" required><br><br>
            
            <button type="submit">Add Book</button>
        </form>
        `
    )
});

router.post('/books', (req, res) => {
    console.log("Form submitted with data:", req.body); 
    res.send(`Book "${req.body.title}" by ${req.body.author} has been added!`);
})

module.exports = router;