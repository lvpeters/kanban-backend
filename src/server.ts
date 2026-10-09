import express from 'express'

const app = express()

app.get('/cards', (req,res) => {
    res.json([
        {
            id: 1,
            text: 'isso é um teste'
        }
    ])
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})
