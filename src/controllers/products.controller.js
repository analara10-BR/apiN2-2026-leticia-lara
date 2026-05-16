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

}