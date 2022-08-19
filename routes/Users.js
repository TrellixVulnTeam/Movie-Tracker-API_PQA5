const express = require('express')
const app = express.Router()
const { Movies, User } = require('../models')

// allows server to use data from the Users database
app.get('users', async (req, res) => {
    const data = await Users.findAll()
    res.send(data)
})

app.get('/', (req, res) => {
    res.sendStatus(200)
})

module.exports = app