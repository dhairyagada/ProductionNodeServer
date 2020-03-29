import { Express } from 'express'
import { HelloWorldRouteController } from '../routes/helloworld/HelloWorldRouteController'
export class InitializeRoutes {

    public static async Initialize(app: Express, link: string) {
        let routes = await this.getRoutes(link)

        routes.forEach(rc => {
            app.use("/", rc.router)
        })
    }

    public static async getRoutes(link: string): Promise<Array<any>> {
        let routes: Array<any> = []

        routes.push(new HelloWorldRouteController(link))

        return Promise.resolve(routes)
    }
}