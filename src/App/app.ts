import Express from 'express';
import bodyParser from 'body-parser';
import { ThingsRoutes } from '../Routes/things.routes';
class App{

    public app:Express.Application ; 
    private thingsRoute = new ThingsRoutes();
    constructor(){

        this.app=Express();

        this.config();

        this.thingsRoute.thingsRoutes(this.app);
    }

    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false})); //al abrir postman y mandamos algo por internet se tiene que cifrar 
        //con esto lo descifra y recibimos un json 
    }

}

export default new App().app;
