// Middleware "catch-all" para rotas inexistentes

export const notFound = (req, res, next) => {

    res.status(404).json({

        message: "Esta rota não existe na API do Brechó Online!",

        method: req.method,

        path: req.originalUrl,

        status: 404,

    });

};


// Middleware para tratamento de erros

export const errorHandler = (err, req, res, next) => {

    console.error(err.stack);

    return res.status(500).json({

        message: "Erro interno do servidor!",

        error: err.message,

    });

};
