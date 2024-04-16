"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    customer: {
        type: String,
        required: true // Nombre del cliente, obligatorio
    },
    products: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Product', // Referencia al modelo de Productos
            required: true // Lista de productos en el pedido, obligatoria
        }],
    status: {
        type: String,
        enum: ['Pendiente', 'En Proceso', 'Enviado', 'Entregado'], // Estado del pedido
        default: 'Pendiente' // Valor por defecto
    },
    createdAt: {
        type: Date,
        default: Date.now // Fecha de creación del pedido
    }
});
exports.OrderModel = (0, mongoose_1.model)('order', orderSchema);
