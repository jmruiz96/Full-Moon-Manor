const db = require('../config/connection');
const userSeed = require('./userSeed');
const roomSeed = require('./roomSeed');
const { User, Room } = require('../models');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Room.deleteMany({});
        await User.create(userSeed);
        await Room.create(roomSeed);

        console.log('Seeding done');
        process.exit(0);
    } catch (err) {
        throw err;
    }
})