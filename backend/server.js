// =========================
// IMPORT REQUIRED PACKAGES
// =========================

// Import Express (backend framework)
const express = require("express");

// Import CORS (allows frontend to talk to backend)
const cors = require("cors");


// =========================
// CREATE APP
// =========================

const app = express();


// =========================
// MIDDLEWARE
// =========================

// Allow requests from frontend (VERY IMPORTANT)
app.use(cors());

// Allow server to read JSON data from forms
app.use(express.json());


// =========================
// ROUTES (ENDPOINTS)
// =========================

// Test route (just to check server is working)
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});


// =========================
// IMPORT NODEMAILER
// =========================
const nodemailer = require("nodemailer");


// =========================
// EMAIL CONFIGURATION
// =========================

// Create transporter (this connects to Gmail)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "YOUR_EMAIL@gmail.com",      // 🔁 replace
        pass: "YOUR_APP_PASSWORD"          // 🔁 replace (NOT your real password)
    }
});


// =========================
// CONTACT FORM ROUTE (UPDATED)
// =========================

app.post("/contact", async (req, res) => {

    const { name, email, message } = req.body;

    try {
        // =========================
        // EMAIL CONTENT
        // =========================
        const mailOptions = {
            from: email, // sender (user)
            to: "YOUR_EMAIL@gmail.com", // 🔁 your email (receiver)
            subject: "New Contact Message 🚀",
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `
        };

        // =========================
        // SEND EMAIL
        // =========================
        await transporter.sendMail(mailOptions);

        // =========================
        // SUCCESS RESPONSE
        // =========================
        res.json({
            success: true,
            message: "Email sent successfully!"
        });

    } catch (error) {

        console.error(error);

        res.json({
            success: false,
            message: "Failed to send email"
        });
    }
});


// =========================
// START SERVER
// =========================

// Set port number
const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});