const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const uuid = require('uuid')

const logger = require('./middleware/logger')

const app = express();

app.use(logger)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//set static folder
app.use(express.static(path.join(__dirname,'public')))
app.use('/api/members',require('./routes/api/members'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))
 