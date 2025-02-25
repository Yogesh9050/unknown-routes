const express = require('express');

const router = express.Router();

const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

router.get('/', (req, res) =>{
    const courseName = courses.map(course => course.name).join(",");
    res.send(`Course: ${courseName}`)
})

router.get('/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        return res.send("Course not found.");
    }
    res.send(`Course: ${course.name} Description: ${course.description}`)
})

module.exports = router;