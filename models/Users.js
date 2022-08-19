const { db, DataTypes } = require('../db')

const Users = db.define('Pet', {
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false} 
})

const seedUsers = [
    { name: 'Joyce', age: 19 },
    { name: 'Lindani', age: 19 }
]

async function seedUser(){
    for(let user of seedUsers){
        await Users.create(user)
    }
}

module.exports = { Users, seedUser }