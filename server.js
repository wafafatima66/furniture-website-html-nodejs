const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static HTML form
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/feedbackDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Define schema for the feedback data
const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    feedback: String,
    comments: String,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String
});

// Create model based on the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Route to handle form submission
app.post('/submit-feedback', async (req, res) => {
    try {
        const feedbackData = new Feedback({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            feedback: req.body.feedback,
            comments: req.body.comments,
            question1: req.body.question1,
            question2: req.body.question2,
            question3: req.body.question3,
            question4: req.body.question4,
            question5: req.body.question5
        });

        // Save the feedback to the database using async/await
        await feedbackData.save();
        res.json({ message: 'Feedback received and saved.' });
    } catch (err) {
        res.status(500).send('Error saving feedback.');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
