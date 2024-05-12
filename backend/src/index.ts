import express from "express";
const app = express();
import nodemailer, { Transporter } from "nodemailer";
import { connectDB } from "./db/connect";
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import authRoute from "./routes/auth";
import protectedRoutes from "./routes/protected";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ConnectOptions } from "couchbase";

const port = process.env.PORT || 8080;
const clientProdUrl = process.env.CLIENT_PROD_URL || "";
const clientDevUrl = process.env.CLIENT_DEV_URL || "";

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(
  cors({
    origin: [clientProdUrl, clientDevUrl],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/user", authRoute);
app.use("/api/v1/protected", protectedRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB({
      connectionString: process.env.CB_URI,
      bucketName: process.env.CB_BUCKET,
      username: process.env.CB_USERNAME,
      password: process.env.CB_PASSWORD,
    });
    console.log("Connected to Couchbase Server");
    app.listen(port, () => {
      console.log(`Running on environment: ${process.env.NODE_ENV}`);
      console.log(`Server listening on port ${port}...`);
    });
  } catch (err) {
    console.error("Error on server startup:", err);
  }
};
// Setup transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.NODEMAIL_USER,
    pass: process.env.NODEMAIL_PASS,
  },
});

const subject =
  "ACTION NEEDED: Let's Work Together on Our Child Support Details";
const mailContent = `
  <div style="max-width: 1000px; border: solid 1px #CBCBCB; margin: 0 auto; padding: 50px 60px; box-sizing: border-box;">
  <img src="logo.png" alt="kind settle Logo" style="display: block; margin: 0 auto; max-width: 200px;">
  <h1 style="text-align: center;">Welcome to Easier Co-Parenting.</h1>
  <p>Hello {parent2},</p>

  <p>We hope this email finds you well! We're excited to introduce you to 
  Kindsettle, a platform designed to simplify the child support process for co-
  parents like you. Our goal is to help you manage and mediate  
  child support arrangements seamlessly and with less stress..</p>
  <p>{parent1} has sent you a custom message as well:</p>
  <p>"Hi {parent2}, I've started our child support claim on Kindsettle and 
  added some preliminary details. I believe this tool can make things smoother for both of us 
   as we work through these arrangements for [Child/Children's Name]. Please  
   take a moment to review and add your insights. Thank you for your cooperation."</p>
  <p>The children filed under this claim are:</p>
  <ul>
    <li>[Child/Children's Name 1]</li>
    <li>[Child/Children's Name 2]</li>
    <li>[Child/Children's Name 3]</li>

  </ul>
  <p>
  Kindsettle offers tools to easily calculate fair support amounts, mediate agreements, and manage payments—all in one place. You're invited to review the claim details through the link below and add your information as needed:
  </p>
  <p>
  <button style="background-color: #4CAF50; /* Green */ border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: block; font-size: 16px; margin: 0 auto; cursor: pointer;">Review claim details</button>
  </p>
  <p>
  Please complete your part by May 30th to keep the process moving efficiently. If you have any questions or need further assistance, our support team is just an email or phone call away.
  </p>
  <p>
  Thank you for engaging in this important step for [Child/Children's Name]. We look forward to supporting you both through this process.
  </p>
  <p>
  Warm regards, The Kindsettle Team
  </p>
</div>
      `;

// Setup mail options
const mailOptions = {
  from: process.env.NODEMAIL_USER,
  to: "test123@gmail.com", // Change this to the recipient's email address. Make sure the recipient has access to the email address.
  subject: subject,
  html: mailContent,
};

const sendMail = async (transporter: Transporter, mailOptions: any) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error occurred while sending email: ", error);
  }
};

sendMail(transporter, mailOptions);

start();
