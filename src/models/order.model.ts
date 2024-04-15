import {Schema, model} from 'mongoose';

const orderSchema = new Schema({
    customer: {
        type: String,
        required: true // Nombre del cliente, obligatorio
    },
    products: [{
        type: Schema.Types.ObjectId,
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


export const OrderModel = model('order',orderSchema);