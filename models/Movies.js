const { db, DataTypes } = require('../db')

const Movies = db.define('Movies', {
    name: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    release: { type: DataTypes.INTEGER, allowNull: false} 
})

const seedMovies = [
    { name: 'Parasite', genre: 'Thriller', release: 2019 },
    { name: 'The Shawshank Redeption', genre: 'Drama', release: 1994 },
    { name: 'Clueless', genre: 'Coming-Of-Age', release: 1995 },
    { name: 'White Chicks', genre: 'Comedy', release: 2004 },
    { name: 'Cars 2', genre: 'Animated', release: 2011 }
]

async function seedMovie(){
    for(let movie of seedMovies){
        await Movies.create(movie)
    }
}

module.exports = { Movies, seedMovie }