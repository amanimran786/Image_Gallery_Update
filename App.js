// server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the directory where your image gallery is located
const imageGalleryDirectory = path.join(__dirname, 'image_gallery');

// Middleware to serve static files
app.use(express.static(imageGalleryDirectory));

// Route to render the image gallery page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
