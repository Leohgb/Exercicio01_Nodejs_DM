const express = require("express")
const app = express()

app.get("/", (res) => {
    res.send("Pagina inicial")
})

app.get("/cadastro/:nome/:sobrenome/:idade", (req, res) => {
    res.send("Nome: " + req.params.nome + "<br>Sobrenome: " + req.params.sobrenome
        + "<br>Idade: " + req.params.idade
    )
})

app.listen(8081, () => {
    console.log("Servidor Rodando na porta 8081")
})