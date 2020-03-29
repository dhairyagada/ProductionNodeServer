import { Router,Request,Response } from "express";

export interface IRouteController{
    router : Router,
    path : string
    InitializeController(link: string):Promise<void>
    runService(req: Request, resp: Response): Promise<any>
    InitializeGet():void
    InitializePost():void
}