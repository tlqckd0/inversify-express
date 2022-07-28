import express,{ Application, Request, Response, NextFunction, Router } from 'express';

class ExpressApp {
    private _app: Application;
    private _controllers: Array<any>;

    constructor(app: Application, controllers: Array<any>) {
        this._app = app;
        this._controllers = controllers;
        this.initOptions();
        this.registRouter();
    }
    initOptions() : void{
        this._app.use(express.json());
        this._app.use(express.urlencoded());
    }
    
    registRouter(): void {
        this._controllers.forEach((controller) => {
            this._app.use(controller.initRouter());
        });
    }

    startServer(port: Number): void {
        this._app.listen(port, () => {
            console.log(` #####  Server listening on port: ${port}  #####`);
        });
    }

}

export { ExpressApp }