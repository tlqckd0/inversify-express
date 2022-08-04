import { Container } from "inversify";
import { HelloController } from "../controller/hello.controller";
import { HelloRepository } from "../repository/hello.repository";
import { HelloService } from "../service/hello.service";
import { TYPES } from "./types";

const myContainer = new Container();
myContainer.bind<HelloService>(TYPES.HelloService).to(HelloService).inSingletonScope();
myContainer.bind<HelloController>(TYPES.HelloController).to(HelloController).inSingletonScope();
myContainer.bind<HelloRepository>(TYPES.HelloRepository).to(HelloRepository).inSingletonScope();
myContainer.bind<Map<Number, String>>(TYPES.DataSource).toConstantValue(new Map<Number, String>);
export { myContainer };