export default class ProductsController {

    constructor() {}

    async getProducts(req, res, next) {

        try {

            const products = [

                {
                    id: 1,
                    nome: "Mini saia",
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

            res.json({
                productsList: products
            });

        } catch (error) {

            next(error);

        }

    }

    async getProductById(req, res, next) {

        try {

            const { id } = req.params;

            const products = [

                {
                    id: 1,
                    nome: "Mini saia",
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

            const product = products.find(
                p => p.id == id
            );

            if (!product) {
                return res.status(404).json({
                    message: "Produto não encontrado"
                });
            }

            res.json(product);

        } catch (error) {

            next(error);

        }

    }

}
