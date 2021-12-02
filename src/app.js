const express = require('express')
const morgan =require('morgan')
const mongoose = require('mongoose')
const path = require('cors')
//const path = require('path')
const cors = require('cors') 
const incomeRoutes =require('./routes/income.routes') 
const outcomeRoutes = require('./routes/outcome.routes')
const authRoutes = require('./routes/auth.routes')
const app = express()

require('dotenv').config()

app.use('./auth',authRoutes)

//configuraciones
//const port = 3000
app.use(cors())
app.set('port', process.env.PORT || 3000) // para tener puerto en la web de mongoDB
app.use(morgan('dev'))
mongoose.connect(process.env.DB_URL)
.then(db=> console.log('Connected'))
.catch(err => console.log('err'))
app.use(express.urlencoded({extended: false}))
//app.use('/documentation', express.static(path.join(__dirname,'../doc/')))  //ruta documentacion software

//rutas incomes
app.use('/incomes', incomeRoutes)
app.use('/outcome', outcomeRoutes)
app.use('/auth', authRoutes)

app.get('/saludo', (req, res) =>{
    res.send('Hola tripulantes')
})


app.get('/tripulantes', (req, res) =>{
    res.send('Estamos en el grupo 31, primera clase')
}
)

//inicio servidor
app.listen(app.get('port'), ()=>{
    console.log('Server iniciado')
})
