import express, { Application } from "express";
import { ExpressApp } from './app';
import HelloController from "./controller/hello.controller";
import HelloRepository from "./repository/hello.repository";
import HelloService from "./service/hello.service";

function main(): void {
    const app: Application = express();
    const routerList = new Array();

    //이게 뭐야 ㅋㅋㅋ
    routerList.push(new HelloController(new HelloService(new HelloRepository(new Map<Number, String>)), "/user"));
    
    const expressApp: ExpressApp = new ExpressApp(app, routerList);
    expressApp.startServer(8080);
}

main();