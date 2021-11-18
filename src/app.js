const express = require('express')
const morgan =require('morgan')
const mongoose = require('mongoose')
const incomRoutes =require('./routes/income.routes')
const outcomRoutes = require('./routes/outcome.routes')
const app = express()
require('dotenv').config()
const port = 3000

//configuraciones
app.use(morgan('dev'))
mongoose.connect(process.env.DB_URL)
.then(db=> console.log('connected'))
.catch(err => console.log('err'))

app.use(express.urlencoded({extended:false}))

//rutas incomes
app.use('/incomes', incomeRoutes)
app.use('/outcome', outcomeRoutes)

app.get('/saludo', (req, res) =>{
    res.send('Hola tripulantes')
}
)

app.get('/tripulantes', (req, res) =>{
    res.send('Estamos en el grupo 31, primera clase')
}
)

//inicio servidor
app.listen(port, ()=>{
    console.log('Server iniciado')
})
