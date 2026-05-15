
import { Router } from "express";

import ApiController from "../controllers/api.controller.js";

import verifyParamId from "../middlewares/verify.id.middleware.js";

const router = Router();

const controller = new ApiController();


// LISTAR TODAS AS ROUPAS
router.get(
    "/roupas",
    (req, res) =>
        controller.getRoupas(req, res)
);


// BUSCAR ROUPA POR ID
router.get(
    "/roupas/:id",
    verifyParamId,
    (req, res, next) =>
        controller.getRoupaByParamId(req, res, next)
);


// CADASTRAR NOVA ROUPA
router.post(
    "/roupas",
    (req, res) =>
        controller.createRoupa(req, res)
);


// ATUALIZAR ROUPA
router.put(
    "/roupas/:id",
    verifyParamId,
    (req, res, next) =>
        controller.updateRoupa(req, res, next)
);


// DELETAR ROUPA
router.delete(
    "/roupas/:id",
    verifyParamId,
    (req, res, next) =>
        controller.deleteRoupa(req, res, next)
);


// NOVA ROTA HOME
router.get("/home", (req, res) => {

    const dados = {
        titulo: "Loja Virtual"
    };

    res.json(dados);

});


export { router };
