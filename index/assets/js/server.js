const express = require('express');
const app = express();
const port = 3000; // Port number for your server
const path = require('path');
const fs = require('fs');

// Serve static files (HTML, CSS, JavaScript) from a 'public' folder
app.use(express.static('/Users/Abubakar/Desktop/index'));

// API route to serve car data from 'cars.json'
app.get('/api/cars', (req, res) => {
    const carsFilePath = path.join(__dirname, 'cars.json');

    fs.readFile(carsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const cars = JSON.parse(data);
        console.log('Retrieved car data:', cars); // Log the data
        res.json(cars);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
