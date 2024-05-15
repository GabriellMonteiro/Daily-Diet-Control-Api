const prisma = require("../utils");

class TimeController {

    async create(request, response) {
        try {
            const requestBody = request.body;

            const time = await prisma.times.create({
                data: {
                    nome: requestBody.nome,
                    anoFundacao: requestBody.anoFundacao,
                    pais: requestBody.pais,
                    tecnico: requestBody.tecnico,
                    Jogador: requestBody.Jogador,
                }
            })

            response.json(time);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async delete(request, response) {
        try {
            const param = request.params;

            const result = await prisma.times.delete({
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

            const result = await prisma.times.update({
                where: {
                    id: param.id
                },
                data: {
                    nome: requestBody.nome,
                    anoFundacao: requestBody.anoFundacao,
                    pais: requestBody.pais,
                    tecnico: requestBody.tecnico,
                    Jogador: requestBody.Jogador,
                }
            })

            response.json(result);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async find(request, response) {
        try {
            const timeId = request.params.id;
    
            const time = await prisma.times.findMany({
                where: {
                    id: timeId,
                },
            });

            response.json(time);
        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = TimeController;