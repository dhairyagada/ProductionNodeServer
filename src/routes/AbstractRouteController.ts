import express = require("express");
import { IRouteController } from "./IRouteController";
export abstract class AbstractRouteController implements IRouteController{

    router = express.Router();
    path!: string;

    public async InitializeController(link: string) {
        console.log(link + this.path)
        await this.InitializeGet()
        await this.InitializePost()

    }

    public async runService(req: express.Request, resp: express.Response): Promise<any> {
        resp.send('runService Method for ' + this.path + 'does not exist !')
        throw new Error('runService Method for ' + this.path + 'does not exist !')
    }

    public async InitializeGet(){
        this.router.get(this.path, this.runService.bind(this)).bind(this)
    }

    public async InitializePost(){
        this.router.post(this.path, this.runService.bind(this)).bind(this)
    }
}