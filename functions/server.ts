// Importa express y otras dependencias
import express, { Application, Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import ServerlessHttp from 'serverless-http';
import { connectDB } from '../src/database';
import { PORT } from '../src/config';
import swaggerUi from 'swagger-ui-express';
import orderSwaggerSpecs from '../src/config/orderSwaggerConfig'
import productSwaggerSpecs from '../src/config/productSwaggerConfig';
import { productRoute, orderRoute } from '../src/routes'; // Importa las rutas individuales

// Crea un enrutador para la aplicación
const router = Router();

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
router.use('/product', productRoute);
router.use('/order', orderRoute);

// Configura la aplicación de express
const app = express();
app.use(cors());
app.use(express.json()); // Middleware para analizar el cuerpo de la solicitud
// Rutas de documentación Swagger
app.use('/docs-api-order', swaggerUi.serve, swaggerUi.setup(orderSwaggerSpecs));
app.use('/docs-api-product', swaggerUi.serve, swaggerUi.setup(productSwaggerSpecs));

// Combina las rutas de la API y de documentación en el mismo enrutador
router.use('/docs-api-order', swaggerUi.serve, swaggerUi.setup(orderSwaggerSpecs));
router.use('/docs-api-product', swaggerUi.serve, swaggerUi.setup(productSwaggerSpecs));

// Usa el enrutador principal para las rutas de la API
app.use('/.netlify/functions/server', router);
// Clase Server para la configuración y escucha del servidor
export class Server {
    private appInstance: Application;

    constructor() {
        this.appInstance = app;
        connectDB();
        this.configuration();
        this.middlewares();
    }

    private configuration() {
        this.appInstance.set('port', PORT || 3000);
    }

    private middlewares() {
        this.appInstance.use(morgan('dev'));
    }

    public getApp(): Application {
        return this.appInstance;
    }

    public listen() {
        this.appInstance.listen(this.appInstance.get('port'), () => {
            console.log(`Server on port: ${this.appInstance.get('port')}`);
        });
    }
}

// Inicia una instancia del servidor y exporta la función para Netlify
const server = new Server();
export const handler = ServerlessHttp(server.getApp());
