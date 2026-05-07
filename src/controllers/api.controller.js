export default class ApiController {

    constructor() {}

    roupas = [

        {
            id: 1,
            nome: "Jaqueta Jeans",
            tamanho: "M",
            marca: "Levis",
            preco: 80,
            categoria: "Casaco",
            disponivel: true
        },

        {
            id: 2,
            nome: "Vestido Vintage",
            tamanho: "P",
            marca: "Zara",
            preco: 65,
            categoria: "Vestido",
            disponivel: true
        },

        {
            id: 3,
            nome: "Camisa Oversized",
            tamanho: "G",
            marca: "Nike",
            preco: 90,
            categoria: "Camisa",
            disponivel: true
        },

        {
            id: 4,
            nome: "Calça Cargo",
            tamanho: "42",
            marca: "Adidas",
            preco: 110,
            categoria: "Calça",
            disponivel: true
        },

        {
            id: 5,
            nome: "Moletom Preto",
            tamanho: "M",
            marca: "Puma",
            preco: 95,
            categoria: "Moletom",
            disponivel: false
        }

    ];

    // LISTAR ROUPAS
    async getRoupas(req, res) {

        try {

            res.json(this.roupas);

        } catch (error) {

            return res.status(500).json({
                error: "Erro ao exibir roupas!"
            });

        }

    }

    // BUSCAR ROUPA POR ID
    async getRoupaByParamId(req, res, next) {

        try {

            const id = Number(req.params.id);

            const roupa = this.roupas.find(
                roupa => roupa.id === id
            );

            if (!roupa) {

                throw new Error("Roupa não encontrada!");

            }

            res.json(roupa);

        } catch (error) {

            next(error);

        }

    }

}
