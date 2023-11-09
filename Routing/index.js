const express = require('express')
const express = require('mysql2')
const bookRoute = require('./routes/book')
const authorRoute = require('./routes/author')
const dbConfig = require('./config/database')
const pool = mysql.createPool(dbConfig)

pool.on('error', (err) => {
    console.log(err)
})

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// parameter harus diawali : diawal
app.get('/contohparams/:username/:jurusan/:kelas', (req, res) => {
    res.json(req.params)
})

app.get('/contohparam', (req, res) => {
    res.json(req.query)
})

app.get('/', (req, res) => {
    res.write('Hello World!')
    res.end()
})

app.use('/book', bookRoute)
app.use('/author', authorRoute)

app.listen(PORT, ()=> {
    console.log(`server berjalan di http://localhost:${PORT}`)
})