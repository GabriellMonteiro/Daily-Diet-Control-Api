const prisma = require("../utils");

class PartidaController {

    async create(request, response) {
        try {
            const requestBody = request.body;

            const partida = await prisma.partidas.create({
                data: {
                    data: requestBody.data,
                    local: requestBody.local,
                    placar: requestBody.placar,
                    timeCasa: requestBody.timeCasa,
                    timeVisitante: requestBody.timeVisitante,
                }
            })

            response.json(partida);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async delete(request, response) {
        try {
            const param = request.params;

            const result = await prisma.partidas.delete({
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

            const result = await prisma.partidas.update({
                where: {
                    id: param.id
                },
                data: {
                    data: requestBody.data,
                    local: requestBody.local,
                    placar: requestBody.placar,
                    timeCasa: requestBody.timeCasa,
                    timeVisitante: requestBody.timeVisitante,
                }
            })

            response.json(result);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async find(request, response) {
        try {
            const partidaId = request.params.id;
    
            const jogador = await prisma.partidas.findMany({
                where: {
                    id: partidaId,
                },
            });

            response.json(jogador);
        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = PartidaController;