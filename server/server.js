const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change the port if needed

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., your HTML file)
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
    const inputText = req.body.inputText;
    console.log("inputText: ", inputText);
    const responseText = inputText.toUpperCase(); // Example mutation

    // Send the mutated text back as response
    res.json(responseText);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
