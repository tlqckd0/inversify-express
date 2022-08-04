import express, { Application } from "express";
import { ExpressApp } from './app';
import { HelloController } from "./controller/hello.controller";
import { myContainer } from "./inversify/inversify.config";
import { TYPES } from "./inversify/types";

function main(): void {
    const app: Application = express();
    const routerList = new Array();
    const helloConrtoller = myContainer.get<HelloController>(TYPES.HelloController);
    //이게 뭐야 ㅋㅋㅋ
    routerList.push(helloConrtoller);

    const expressApp: ExpressApp = new ExpressApp(app, routerList);
    expressApp.startServer(8080);
}

main();