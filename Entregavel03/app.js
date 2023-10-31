const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const calc = require('./calculadora')
const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Oi, mundo :-)')
});

app.post('/soma', (req, res) => {
    const body = req.body;
    const resultado = calc.soma(body.a, body.b)

    res.send(`Resultado da soma ${body.a} + ${body.b} = ${resultado}`);
})

app.post('/subtracao', (req, res) => {
    const body = req.body;
    const resultado = calc.subtracao(body.a, body.b)
    
    res.send(`Resultado da subtração ${body.a} - ${body.b} = ${resultado}`);
})

app.post('/multiplicacao', (req, res) => {
    const body = req.body;
    const resultado = calc.multiplicacao(body.a, body.b)
    
    res.send(`Resultado da multiplicação ${body.a} * ${body.b} = ${resultado}`);
})

app.post('/divisao', (req, res) => {
    const body = req.body;
    const resultado = calc.divisao(body.a, body.b)
    
    res.send(`Resultado da divisão ${body.a} / ${body.b} = ${resultado}`);
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
