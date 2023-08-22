const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('este é meu desenvolvimento em back-end')
})

app.listen(3000, () => {
    console.log('rodando projeto na porta 3000')
})