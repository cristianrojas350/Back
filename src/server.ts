import express,{Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';


//importacion Modulos definidos
import { connectDB } from './database';
import { PORT } from './config';
import { routes } from './routes';

export class Server{
    private app: Express;

    constructor(){
        this.app = express();
        connectDB();
        this.configuration();
        this.middlewares();
        this.routes();
    }

    configuration(){
        this.app.set('port', PORT || 3000);

    }
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.get('/',(req,res)=>{
            res.status(200).json({
                name:'Api Rest TEst'
            })
        })

        this.app.post('/',(req,res)=>{
            console.log(req.body);
            res.json(req.body)
        })

        this.app.use('/api/product', routes.productRoute);
        this.app.use('/api/order',  routes.orderRoute);
    }
    listen(){
        this.app.listen(this.app.get('port'),()=>{
            console.log(`server on puerto: ${this.app.get('port')}`)
        })
    }
}