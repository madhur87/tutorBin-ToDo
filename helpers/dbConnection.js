const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async () => {
    try {
        const mongoDB = await mongoose.connect(process.env.MONGOURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        if (mongoDB) {
            console.log('DB is Connected Successfully');
        }
    } catch (err) {
        throw new Error(err);
    }
};