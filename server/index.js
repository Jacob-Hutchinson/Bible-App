const express = require('express')
const cors = require('cors')
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())

const { getChapter, getOldTestament, getNewTestament, getPsalms, getWisdom, getGospel, getPrevious, getNext } = require('./controller')

app.get('/chapter', getChapter)
app.get('/oldT', getOldTestament)
app.get('/newT', getNewTestament)
app.get('/psalms', getPsalms)
app.get('/wisdom', getWisdom)
app.get('/gospel', getGospel)
app.post('/previous', getPrevious)
app.post('/next', getNext)

const {PORT} = process.env  || 4004 

app.listen(PORT, () => console.log(`listening on port ${PORT}`))