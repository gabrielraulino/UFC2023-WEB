var express = require('express');
var router = express.Router();
var loginService = require("../services/login.service")

// Router para o login (POST) chamando as ações do service.
// A rota é chamada apenas por /login/
router.post(
    "/"
    ,
    (request, response, next) => {
      loginService.login(request,response)
    }
)

module.exports = router;
