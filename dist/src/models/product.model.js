"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
exports.ProductModel = (0, mongoose_1.model)('products', productSchema);
