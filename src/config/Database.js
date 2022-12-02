

const mongoose = require('mongoose');

async function connect() {
    try {
        // await mongoose.connect("mongodb://127.0.0.1:27017/nowbuysdatabase_dev");
        await mongoose.connect(`mongodb+srv://nowbuysadmin:hvcWTbn7DBG4m9vd@nowbuys.mktmmwt.mongodb.net/nowbuysdatabase`);
        console.log("Connec database is succeded");
    } catch (error) {
        console.log("Connect database is failed");
    }
}

module.exports = {connect};