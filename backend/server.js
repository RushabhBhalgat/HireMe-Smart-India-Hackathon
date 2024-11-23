import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import MongoStore from "connect-mongo";
import authRoutes from "./routes/auth.js";
import configurePassport from "./config/passport.js";
import cors from "cors";
dotenv.config();
connectDB();
configurePassport(passport);

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Allow cookies to be sent
  })
);

app.use(express.json());
configurePassport(passport);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.MONGO_URI }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
