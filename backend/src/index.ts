import express from "express";
const app = express();
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

start();
