import express, { Application } from "express";
import { ExpressApp } from './app';
import HelloController from "./hello.controller";
import HelloRepository from "./hello.repository";
import HelloService from "./hello.service";

function main(): void {
    const app: Application = express();
    const routerList = new Array();

    //이게 뭐야 ㅋㅋㅋ

    routerList.push(new HelloController(new HelloService(new HelloRepository(new Map<Number, String>)), "/user"));
    const expressApp: ExpressApp = new ExpressApp(app, routerList);
    expressApp.loadRouter();
    expressApp.startServer(8080);
}

main();