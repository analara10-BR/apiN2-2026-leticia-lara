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


app.get("/products", (req, res) => {

    const products = [

        {
            id: 1,
            nome: "Mini saia",
            disponivel: true
        },

        {
            id: 2,
            nome: "Calça cargo",
            disponivel: true
        },

        {
            id: 3,
            nome: "Vestido",
            disponivel: false
        },

        {
            id: 4,
            nome: "cropped",
            disponivel: false
        }

    ];

    res.render("products", {
        listaProdutos: products
    });

});

export default app;
