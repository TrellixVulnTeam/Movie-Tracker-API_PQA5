const { db, DataTypes } = require('../db')
const { seedMovie, Movies} = require('./movies')
const { seedUser, Users } = require('./users')

async function seed(){
    await db.sync({ force: true })
    // 'force: true' = prevents data duplication
    await seedMovie()
    await seedUser()
}

module.exports = { seed, Movies, Users }