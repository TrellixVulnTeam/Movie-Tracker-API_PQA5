const express = require('express')
const app = express()
const users = require('./routes/Users')
const movies = require('./routes/Movies')
const { seed } = require('./models')



app.use(express.json())

//enpoint name = /users
app.use('/users', users)

//enpoint name = /movies
app.use('/movies', movies)

async function main(port){
    await seed()
    app.listen(port, () => {
        console.log(`App port: ${port}`)
    })
}

main(3000)


// idk where this goes
// // users
// app.use('/users', users)

// // allows server to use data from the Users database
// app.get('users', async (req, res) => {
//     const data = await Users.findAll()
//     res.send(data)
// })

// let users = [
//     { name: 'User 1', age: 19 },
//     { name: 'User 2', age: 27 },
//     { name: 'User 3', age: 68 },
//     { name: 'User 4', age: 22 },
//     { name: 'User 5', age: 34 }
// ]


// // movies
// app.use('/movies', movies)

// // allows server to use data from the Movies database
// app.get('movies', async (req, res) => {
//     const data = await Movies.findAll()
//     res.send(data)
// })

// // finding movies by their id code
// app.get('/movies/:id', async (req, res) => {
//     const data = await Movies.findByPK(req.params.id)
//     // if data isnt found, send error message
//     if(!data){
//         res.status(404).send(`Uh oh! Your search for ${req.params.id} did not return any matches. Please try different keywords or search by genre`)
//         return
//     }
//     res.send(data)
// })