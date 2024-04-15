import mongoose,{connect} from 'mongoose';
import {MONGO_URI} from '../config';


export const connectDB = () => {
    mongoose.connect(MONGO_URI as string, {
        serverSelectionTimeoutMS: 5000
    })
    .then(() => {
        console.log('Conexión a MongoDB establecida con éxito');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });
};
