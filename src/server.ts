import express, { Application, Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import ServerlessHttp from 'serverless-http';
import { connectDB } from './database';
import { PORT } from './config';
import { productRoute, orderRoute } from './routes'; // Importa las rutas individuales

// Crea un enrutador para la aplicación
const router = Router();

// Configura el enrutador como lo necesites
router.get('/', (req, res) => {
    res.status(200).json({
        name: 'Api Rest Test'
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

router.use('/product', productRoute); // Usa las rutas importadas directamente
router.use('/order', orderRoute); // Usa las rutas importadas directamente

// Agrega la línea de Netlify a la configuración del servidor
const app = express();
app.use('/.netlify/functions/api', router);

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
        this.appInstance.use(cors());
        this.appInstance.use(express.json());
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

const server = new Server();
//export const handler = ServerlessHttp(server.getApp());
module.exports.handler= ServerlessHttp(server.getApp());
