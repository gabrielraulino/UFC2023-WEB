const userDefault = "admin";
const senhaDefault = "admin";

class LoginService {
  // Serviço de login
    static login(request,response) {
      // Recebe os dados do login vindo do body da requisição, já que é uma requisição POST
      const login = request.body.login;
      const senha = request.body.senha;

      // Caso o login e a senha sejam iguais ao login e senha default (ambos admin), retorna true
      if (login === userDefault && senha === senhaDefault) {
        response.status(201).json({ "res": true })
      } else {
        // Caso contrário, retorna false
        response.status(201).json({ "res": false })
      }
    }
}

module.exports = LoginService