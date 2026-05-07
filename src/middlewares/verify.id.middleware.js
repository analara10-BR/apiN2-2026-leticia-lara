// Middleware para validação de ID

const verifyParamId = (request, response, next) => {

    const id = +request.params.id;

    if (isNaN(id)) {

        return response.status(400).json({

            message: "Erro: ID deve ser um número!"

        });

    }

    next();

};

export default verifyParamId;
