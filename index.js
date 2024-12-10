const routes = require("./Routes/index")
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://eliasghanem:0000@cluster0.0nlzsxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace 'mydatabase' with your database name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.use('/api', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
