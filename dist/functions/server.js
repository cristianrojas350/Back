"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.Server = void 0;
// Importa express y otras dependencias
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const database_1 = require("../src/database");
const config_1 = require("../src/config");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const orderSwaggerConfig_1 = __importDefault(require("../src/config/orderSwaggerConfig"));
const productSwaggerConfig_1 = __importDefault(require("../src/config/productSwaggerConfig"));
const routes_1 = require("../src/routes"); // Importa las rutas individuales
// Crea un enrutador para la aplicación
const router = (0, express_1.Router)();
// Configura las rutas GET y POST existentes
router.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        name: 'Api Rest Test'
    });
});
router.post('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    res.json(req.body);
});
// Añade una ruta PUT
router.put('/:id', (req, res) => {
    const productId = req.params.id; // Obtén el ID del producto de los parámetros de la solicitud
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        message: `ProductID ${productId} actualizo correctamente`
    });
});
// Usa las rutas importadas directamente
router.use('/product', routes_1.productRoute);
router.use('/order', routes_1.orderRoute);
// Configura la aplicación de express
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Middleware para analizar el cuerpo de la solicitud
// Rutas de documentación Swagger
app.use('/docs-api-order', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(orderSwaggerConfig_1.default));
app.use('/docs-api-product', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(productSwaggerConfig_1.default));
// Combina las rutas de la API y de documentación en el mismo enrutador
router.use('/docs-api-order', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(orderSwaggerConfig_1.default));
router.use('/docs-api-product', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(productSwaggerConfig_1.default));
// Usa el enrutador principal para las rutas de la API
app.use('/.netlify/functions/server', router);
// Clase Server para la configuración y escucha del servidor
class Server {
    constructor() {
        this.appInstance = app;
        (0, database_1.connectDB)();
        this.configuration();
        this.middlewares();
    }
    configuration() {
        this.appInstance.set('port', config_1.PORT || 3000);
    }
    middlewares() {
        this.appInstance.use((0, morgan_1.default)('dev'));
    }
    getApp() {
        return this.appInstance;
    }
    listen() {
        this.appInstance.listen(this.appInstance.get('port'), () => {
            console.log(`Server on port: ${this.appInstance.get('port')}`);
        });
    }
}
exports.Server = Server;
// Inicia una instancia del servidor y exporta la función para Netlify
const server = new Server();
exports.handler = (0, serverless_http_1.default)(server.getApp());
