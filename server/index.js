import express from 'express';
const app = express();
const PORT = 3000;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
