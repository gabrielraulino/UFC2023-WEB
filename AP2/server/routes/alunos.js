var express = require('express');
var router = express.Router();
var alunoServiceMongo = require("../services/alunos.service.mongo")

router.get(
    "/listar"
    ,
    (request, response, next) => {
        alunoServiceMongo.list(request,response)
    }
)

router.post(
    "/cadastrar"
    ,
    (request, response, next) => {
        alunoServiceMongo.register(request,response)
    }
)

router.put(
    "/atualizar/:id"
    ,
    (request, response, next) => {
        alunoServiceMongo.update(request,response)
    }
)

router.delete("/remover/:id"
    ,
    function (request, response, next) {
        alunoServiceMongo.delete(request,response)
    }
)

router.get("/recuperar/:id", function (request, response, next) {
    alunoServiceMongo.retrieve(request,response)
});

module.exports = router;
