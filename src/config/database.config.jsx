import mongoose from 'mongoose';
import config from './config';

(async () => {
    try {
        const db = await mongoose.connect(config.CONNECTION_STRING, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            dbName: config.DATABASE
        });
        console.log('Database is connected to: ', db.connection.name);
    } catch (error) {
        console.error('Could not connect to the database. Exiting now...', error);
        process.exit();
    }
})();