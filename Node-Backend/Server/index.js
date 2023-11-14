// server/index.js

const express = require("express");
const bodyParser = require("body-parser");
const signupRoute = require("../routes/signup"); 
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use("/signup", signupRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




async function sendEmail(to, subject, text) {
    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shawnb.nimal22@gmail.com', // Replace with your Gmail address
            pass: 'dsph kztb wnab aspw' // Replace with your app-specific password
        }
    });

    // Set email options
    let mailOptions = {
        from: 'shawnb.nimal22@gmail.com', // Replace with your Gmail address
        to: to, // Recipient email
        subject: subject, // Email subject
        text: text, // Email body text
    };

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Example usage
sendEmail('shawn.nimal@gmail.com', 'Hello', 'Hello from Node.js!');
