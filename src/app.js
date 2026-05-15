

import express from "express";

import path from "node:path";

import { fileURLToPath } from "url";

import { router as apiRouter } from "./routes/api.routes.js";

import { mdebug } from "./middlewares/debug.middleware.js";

import {
    notFound,
    errorHandler
} from "./middlewares/errors.middleware.js";

import { mcors } from "./middlewares/mcors.middleware.js";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express();


// CONFIGURAÇÕES DO EJS
app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// MIDDLEWARES
app.use(express.static(
    path.join(__dirname, "../public")
));

app.use(express.json());

app.use(mcors);

app.use(mdebug);


// ROTA VIEW EJS
app.get("/home", (req, res) => {

    res.render("home");

});


// ROTAS API
app.use("/api", apiRouter);


// TRATAMENTO DE ROTAS INEXISTENTES
app.use(notFound);


// MIDDLEWARE DE ERRO
app.use(errorHandler);


export default app;
