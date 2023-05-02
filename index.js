const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({ message: "Chef's Délicieux Server Is Running"})
})

app.listen(port, () => {
    console.log(`Chef's Délicieux server is running on port: ${port}`)
})