

import express from "express";
import path from "node:path";

import { router as apiRouter } from "./routes/api.routes.js";

import { mdebug } from "./middlewares/debug.middleware.js";

import {
    notFound,
    errorHandler
} from "./middlewares/errors.middleware.js";

import { mcors } from "./middlewares/mcors.middleware.js";

const app = express();


// CONFIGURAÇÕES DO EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));


// REGISTRA MIDDLEWARES NA APLICAÇÃO

app.use(mcors); // CORS

app.use(express.json()); // Middleware para JSON

app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(mdebug); // Middleware de debug


// ROTAS DA API
app.use("/api", apiRouter);


// ROTA DA VIEW
app.get("/home", (req, res) => {
    res.render("home");
});


// TRATAMENTO DE ROTAS INEXISTENTES
app.use(notFound);


// MIDDLEWARE DE ERRO
app.use(errorHandler);

export default app;
