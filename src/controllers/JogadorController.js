const prisma = require("../utils");

class JogadorController {

    async create(request, response) {
        try {
            const requestBody = request.body;

            const jogador = await prisma.jogadores.create({
                data: {
                    nome: requestBody.nome,
                    idade: requestBody.idade,
                    posicao: requestBody.posicao,
                    nacionalidade: requestBody.nacionalidade,
                    Time: request.Time
                }
            })

            response.json(jogador);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async delete(request, response) {
        try {
            const param = request.params;

            const result = await prisma.jogadores.delete({
                where: {
                    id: param.id
                }
            })

            return response.status(200);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async update(request, response) {
        try {
            const requestBody = request.body;
            const param = request.params;

            const result = await prisma.jogadores.update({
                where: {
                    id: param.id
                },
                data: {
                    nome: requestBody.nome,
                    idade: requestBody.idade,
                    posicao: requestBody.posicao,
                    nacionalidade: requestBody.nacionalidade,
                    Time: request.Time
                }
            })

            response.json(result);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async find(request, response) {
        try {
            const jogadorId = request.params.id;
    
            const jogador = await prisma.jogadores.findMany({
                where: {
                    id: jogadorId,
                },
            });

            response.json(jogador);
        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = JogadorController;