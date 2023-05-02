const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const chefs = require('./data/chefs.json')
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Chef's Délicieux Server Is Running"})
})

app.get('/chefs', (req, res) => {
    res.json(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id
    const chef = chefs.find(c => c.id === id)
    res.json(chef)
})

app.listen(port, () => {
    console.log(`Chef's Délicieux server is running on port: ${port}`)
})