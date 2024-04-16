"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//import {MONGO_URI} from '../config';
const MONGO_URI = "mongodb+srv://admin:admin@cluster0.meiunse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () => {
    mongoose_1.default.connect(MONGO_URI, {
        serverSelectionTimeoutMS: 5000
    })
        .then(() => {
        console.log('Conexión a MongoDB establecida con éxito');
    })
        .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });
};
exports.connectDB = connectDB;
