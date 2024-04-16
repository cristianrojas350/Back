import mongoose,{connect} from 'mongoose';
//import {MONGO_URI} from '../config';

const MONGO_URI="mongodb+srv://admin:admin@cluster0.meiunse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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
