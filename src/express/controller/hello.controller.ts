import { Router } from "express";
import HelloService from "../service/hello.service";
import {Controller} from "./controller"

class HelloController implements Controller{
    private _helloService: HelloService;
    private _router: Router;
    private _path : any;

    constructor(helloService: HelloService, path : String) {
        this._helloService = helloService;
        this._router = Router();
        this._path = path;
        this.addListener();
    }

    initRouter(): Router {
        return this._router;
    }
    //result의 경우 type을 하나 만드는것이 괜찮을듯.
    addListener(): void {
        const router = Router();
        router
            .get('/:id', (req, res, next) => {
                const { id } = req.params;
                const name = this._helloService.find_info(Number(id));

                const result = { success: false, data : new Object() };
                if (name !== false) {
                    result.success = true;
                    result.data = name;
                }
                res.json(result);
            }).post('/', (req, res, next) => {
                const { id, name } = req.body;

                if (this._helloService.save_info(id, name)) {
                    res.status(201).json({ success: true });
                } else {
                    res.status(201).json({ success: false });
                }
            }).put('/:id', (req, res, next) => {
                const { id } = req.params;
                const dto = req.body;
                const name = this._helloService.update_info(Number(id), dto.name);

                const result = { success: false };
                if (name !== false) {
                    result.success = true;
                }
                res.json(result);

            }).delete('/:id', (req, res, next) => {
                const { id } = req.params;
                const name = this._helloService.delete_info(Number(id));

                const result = { success: false };
                if (name !== false) {
                    result.success = true;
                }
                res.json(result);
            })
        this._router.use(this._path, router);
    }
}

export default HelloController;

