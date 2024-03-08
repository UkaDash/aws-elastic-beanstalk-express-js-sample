const express = require('express');
const app = express();
const port = 8080;

// Serve the image file instead of the text
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/image.jpg'); // Replace 'path_to_your_image.jpg' with the actual path to your image file
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
