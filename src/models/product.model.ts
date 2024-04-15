import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true // Indica que el nombre del producto es obligatorio
    },
    subproduct: {
        type: String,
        required: true // Indica que el nombre del producto es obligatorio
    },
    description: String, // Descripción del producto (opcional)
    price: {
        type: Number,
        required: true // Indica que el precio del producto es obligatorio
    },
    category: String, // Categoría del producto (opcional)
    stock: {
        type: Number,
        required: true // Indica que el stock del producto es obligatorio
    }
});

export const ProductModel = model('products',productSchema);