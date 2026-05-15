import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { router as apiRouter } from "./routes/api.routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// EJS
app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// PUBLIC
app.use(
    express.static(
        path.join(__dirname, "../public")
    )
);


// JSON
app.use(express.json());


// API
app.use("/api", apiRouter);


// HOME
app.get("/home", (req, res) => {
    res.render("home");
});

export default app;
