import express from "express";
import cors from "cors";
import helmet from 'helmet';
import user from './routes/user';
import ConnectDB from "./database/connection";
require("dotenv").config();
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(helmet());
app.use(cors());
app.get("/", (req, res) => res.json({ message: "setup success !!" }));
app.use("/user",user);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
    ConnectDB().then(() =>
        console.log("Server is up and running"))
        .catch(() => console.log("DB connection failed"))
);