import express from "express";
import { router } from "./routes/api.routes.js";
import { debug } from "./middlewares/debug.middleware.js";
import { notFound, errorHandler } from "./middlewares/errors.middleware.js";
import { mcors } from "./middlewares/mcors.middleware.js";

const app = express();

app.use(mcors);
app.use(express.json());
app.use(debug);

app.use("/api", router);

app.use(notFound);
app.use(errorHandler);

export default app;
