const express = require("express");

const app = express();

app.get("/data", (req, res) => {
    const dummy = [
        {
            username: 'Avnish',
            city: 'Bhopal',
            age: 22
        },
        {
            username: 'Sarthak',
            city: 'Bhopal',
            age: 20
        },
        {
            username: 'Mohit',
            city: 'Bhopal',
            age: 20
        },
        {
            username: 'Aarav',
            city: 'Bhopal',
            age: 23
        },
        {
            username: 'Ayush',
            city: 'Bhopal',
            age: 22
        }

    ]
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173').json({ data: dummy });
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});