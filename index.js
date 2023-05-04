const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const chefs = require('./data/chefs.json') 
const recipes = require('./data/recipes.json') 
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

app.get('/chefs/:chef_id/recipes', (req, res) => {
    const chef_id = req.params.chef_id
    const filteredRecipes = recipes.filter(recipe => recipe.chef_id === chef_id)
    res.json(filteredRecipes)
})

app.get('/recipes', (req, res) => {
    res.json(recipes)
})

app.get('/recipes/latest', (req, res) => {
    const latestRecipes = recipes.filter(recipe=>recipe.latest === true)
    res.json(latestRecipes)
})

app.listen(port, () => {
    console.log(`Chef's Délicieux server is running on port: ${port}`)
})