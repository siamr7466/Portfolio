const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter
    // Note: For Gmail, you might need to use an App Password if 2FA is enabled
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'siamrahman7466@gmail.com', // User's email
            pass: process.env.EMAIL_PASSWORD // Expecting this from environment variable
        }
    });

    const mailOptions = {
        from: email,
        to: 'siamrahman7466@gmail.com',
        subject: `Portfolio Contact: Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email
    };

    try {
        if (!process.env.EMAIL_PASSWORD) {
            console.log('Mocking email send (no password provided):', mailOptions);
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return res.json({ status: 'success', message: 'Email sent (mocked)' });
        }

        await transporter.sendMail(mailOptions);
        res.json({ status: 'success', message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
