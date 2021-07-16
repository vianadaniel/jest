import "reflect-metadata";
import express from "express";
import cors from "cors";
import "dotenv/config";
import "./app/database/connection";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);

app.listen(3000, () => console.log("🇧🇷 Stat server port: 3000"));
