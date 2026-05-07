import express from "express";

import { router as apiRouter } from "./routes/api.routes.js";

import { mdebug } from "./middlewares/debug.middleware.js";

import {
    notFound,
    errorHandler
} from "./middlewares/errors.middleware.js";

import { mcors } from "./middlewares/mcors.middleware.js";

const app = express();


// REGISTRA MIDDLEWARES NA APLICAÇÃO

app.use(mcors); // CORS

app.use(express.json()); // Middleware para JSON

app.use(mdebug); // Middleware de debug


// ROTAS DA API

app.use("/api", apiRouter);


// TRATAMENTO DE ROTAS INEXISTENTES

app.use(notFound);


// MIDDLEWARE DE ERRO

app.use(errorHandler);


export default app;
