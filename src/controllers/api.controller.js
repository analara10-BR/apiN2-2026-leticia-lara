

export default class ApiController {

    constructor() {}

    roupas = [

        {
            id: 1,
            nome: "Jaqueta Jeans",
            tamanho: "M",
            marca: "Levis",
            preco: 80,
            categoria: "Casaco"
        },

        {
            id: 2,
            nome: "Vestido Vintage",
            tamanho: "P",
            marca: "Zara",
            preco: 65,
            categoria: "Vestido"
        },

        {
            id: 3,
            nome: "Camisa Oversized",
            tamanho: "G",
            marca: "Nike",
            preco: 90,
            categoria: "Camisa"
        },

        {
            id: 4,
            nome: "Calça Cargo",
            tamanho: "42",
            marca: "Adidas",
            preco: 110,
            categoria: "Calça"
        },

        {
            id: 5,
            nome: "Moletom Preto",
            tamanho: "M",
            marca: "Puma",
            preco: 95,
            categoria: "Moletom"
        }

    ];

    // LISTAR ROUPAS
    async getRoupas(req, res) {

        try {

            res.json(this.roupas);

        } catch (error) {

            return res.status(500).json({
                error: "Erro ao exibir dados da API!"
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

                throw new Error(
                    "Roupa não encontrada!"
                );

            }

            res.json(roupa);

        } catch (error) {

            next(error);

        }

    }

    // CADASTRAR ROUPA
    async createRoupa(req, res) {

        try {

            const novaRoupa = {

                id: this.roupas.length + 1,

                nome: req.body.nome,

                tamanho: req.body.tamanho,

                marca: req.body.marca,

                preco: req.body.preco,

                categoria: req.body.categoria

            };

            this.roupas.push(novaRoupa);

            res.status(201).json({

                mensagem: "Roupa cadastrada com sucesso!",

                roupa: novaRoupa

            });

        } catch (error) {

            return res.status(500).json({
                error: "Erro ao cadastrar roupa!"
            });

        }

    }

    // ATUALIZAR ROUPA
    async updateRoupa(req, res, next) {

        try {

            const id = Number(req.params.id);

            const roupa = this.roupas.find(
                roupa => roupa.id === id
            );

            if (!roupa) {

                throw new Error(
                    "Roupa não encontrada!"
                );

            }

            roupa.nome =
                req.body.nome || roupa.nome;

            roupa.tamanho =
                req.body.tamanho || roupa.tamanho;

            roupa.marca =
                req.body.marca || roupa.marca;

            roupa.preco =
                req.body.preco || roupa.preco;

            roupa.categoria =
                req.body.categoria || roupa.categoria;

            res.json({

                mensagem: "Roupa atualizada!",

                roupa

            });

        } catch (error) {

            next(error);

        }

    }

    // DELETAR ROUPA
    async deleteRoupa(req, res, next) {

        try {

            const id = Number(req.params.id);

            const index = this.roupas.findIndex(
                roupa => roupa.id === id
            );

            if (index === -1) {

                throw new Error(
                    "Roupa não encontrada!"
                );

            }

            this.roupas.splice(index, 1);

            res.json({

                mensagem: "Roupa removida com sucesso!"

            });

        } catch (error) {

            next(error);

        }

    }

}
    }

}
