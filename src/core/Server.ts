var express = require ('express')
var bodyParser = require('body-parser')
var cors = require('cors');
import {Response,Request,Express} from 'express'
import { InitializeMiddleWare } from './InitializeMiddleware';
import { InitializeRoutes } from './InitializeRoutes';
import { ErrorHandlingMiddleware } from '../middleware/ErrorHandlingMiddleware';
import { Logger } from '../utils/logger/Logger';
export async function server() {

    let app :Express= express();
    let port = 4200;
    let host = "localhost";

    let link = "http://" +host+ ":" + port.toString() 

    await InitializeMiddleWare.InitializeCommonMiddleware(app)
    await InitializeRoutes.Initialize(app,link)
    await InitializeMiddleWare.InitializeErrorHandlingMiddleware(app)

    
   let logger = Logger.getLogger()
   logger.info("Starting Server...")
    

    // app.get('/', (req:Request, res:Response) => res.send('Hello World!'))
    
    app.listen(port, host, () => {
        console.log(
            `Server  started listening at ${host} on ${port} port.`
        )
    })


}