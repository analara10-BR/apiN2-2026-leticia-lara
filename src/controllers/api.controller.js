export default class ApiController {

    async getRoupas(req, res) {
        try {

            res.json([
                {
                    id: 1,
                    nome: "Jaqueta Jeans",
                    tamanho: "M",
                    preco: 80
                },

                {
                    id: 2,
                    nome: "Vestido Vintage",
                    tamanho: "P",
                    preco: 65
                }
            ]);

        } catch (error) {

            return res.status(500).json({
                error: "Erro ao listar roupas"
            });

        }
    }

    async getRoupaByParamId(req, res, next) {

        try {

            const id = Number(req.params.id);

            if (id !== 7) {
                throw new Error("Roupa não encontrada");
            }

            res.json({
                mensagem: `Roupa encontrada! ID: ${id}`
            });

        } catch (error) {
            next(error);
        }
    }
}
