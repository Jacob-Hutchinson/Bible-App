const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../build')))

const { getChapter, getOldTestament, getNewTestament, getPsalms, getWisdom, getGospel, getPrevious, getNext } = require('./controller')

app.get('/chapter', getChapter)
app.get('/oldT', getOldTestament)
app.get('/newT', getNewTestament)
app.get('/psalms', getPsalms)
app.get('/wisdom', getWisdom)
app.get('/gospel', getGospel)
app.post('/previous', getPrevious)
app.post('/next', getNext)

const { PORT } = process.env || 4004;

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))