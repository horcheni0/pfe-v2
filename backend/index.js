const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const connectDB = require('./config/db');
const router = require('./routes');
const msgRoutes = require('./routes/messageadmin');

require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes


app.post("/send_recovery_email", (req, res) => {
    sendEmail(req.body)
      .then((response) => res.send(response.message))
      .catch((error) => res.status(500).send(error.message));
});

app.use("/api", router);
app.use('/api/msg', msgRoutes);

// Function to send email
function sendEmail({ recipient_email, OTP }) {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        const mail_configs = {
            from: process.env.MY_EMAIL,
            to: recipient_email,
            subject: "KODING 101 PASSWORD RECOVERY",
            html: `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <title>OTP Email Template</title>
              </head>
              <body>
                <div>
                  <p>Hi,</p>
                  <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
                  <h2>${OTP}</h2>
                  <p>Regards,<br />Koding 101</p>
                </div>
              </body>
              </html>`,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.error(error);
                return reject({ message: `An error has occurred` });
            }
            return resolve({ message: "Email sent successfully" });
        });
    });
}

// Server
const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});
