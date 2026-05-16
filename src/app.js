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

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/products", (req, res) => {

    const products = [

        {
            id: 1,
            nome: "Saia",
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
            nome: "Cropped",
            disponivel: false
        }

    ];

    res.render("products", {
        listaProdutos: products
    });

});

app.get("/products/:id", (req, res) => {
    res.render("product-details");
});

export default app;
