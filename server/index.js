const express = require('express')
const cors = require('cors')
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())

const { getChapter } = require('./controller')

app.get('/chapter', getChapter)

const {PORT} = process.env  || 4004 

app.listen(PORT, () => console.log(`listening on port ${PORT}`))