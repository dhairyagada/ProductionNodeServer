import { Express } from 'express'
import { CommonMiddleware } from '../middleware/CommonMiddleware'
import { ErrorHandlingMiddleware } from '../middleware/ErrorHandlingMiddleware'

export class InitializeMiddleWare{

    public static async InitializeCommonMiddleware(app :Express){
        let middleware = new CommonMiddleware(app)
       
        await middleware.useBodyParser()
        await middleware.useURLencoded()
        await middleware.useCors()
        await middleware.logRequests()
    }

    public static async InitializeErrorHandlingMiddleware(app :Express){
        let errorMiddleware = new ErrorHandlingMiddleware(app)

        await errorMiddleware.handle404Error()
    }
}