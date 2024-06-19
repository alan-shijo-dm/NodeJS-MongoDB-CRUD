import mongoose from 'mongoose';
import app from './app.js';
import { config } from './config/config.js';

const PORT = config.port;

mongoose.connect(config.dataBaseUri).then(()=>{
    console.log('DB connected!');
}).catch((error) => {
    console.error(error);
});
app.listen(PORT, ()=>{
    console.log(`App listening on ${PORT}`);
});