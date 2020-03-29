export class HelloWorld{

    public static async wishHello():Promise<string>{
        let resp = `Hello World!`
        return Promise.resolve(resp)
    }
}