"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoute = exports.productRoute = void 0;
const product_route_1 = __importDefault(require("./product.route"));
exports.productRoute = product_route_1.default;
const order_route_1 = __importDefault(require("./order.route"));
exports.orderRoute = order_route_1.default;
