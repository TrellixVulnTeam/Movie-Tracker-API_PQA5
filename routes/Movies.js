const express = require('express')
const app = express.Router()
const { Movies, User } = require('../models')

// allows server to use data from the Movies database
app.get('movies', async (req, res) => {
    const data = await Movies.findAll()
    res.send(data)
})

// finding movies by their id code
app.get('/movies/:id', async (req, res) => {
    const data = await Movies.findByPK(req.params.id)
    // if data isnt found, send error message
    if(!data){
        res.status(404).send(`Uh oh! Your search for ${req.params.id} did not return any matches. Please try different keywords or search by genre`)
        return
    }
    res.send(data)
})

app.get('/', (req, res) => {
    res.sendStatus(200)
})

module.exports = app