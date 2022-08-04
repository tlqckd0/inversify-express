import { inject, injectable } from "inversify";
import "reflect-metadata";
import { TYPES } from "../inversify/types";

@injectable()
class HelloRepository {
    private dataSource: Map<Number, String>; //나중에 DB pool이나 connection을 받아오면 될것.

    constructor(@inject(TYPES.DataSource) dataSource: Map<Number, String>) {
        this.dataSource = dataSource;
    }

    save(id: Number, name: String): Boolean {
        if (this.dataSource.has(id)) {
            console.log(`id : ${id} exist`);
            return false;
        }
        this.dataSource.set(id, name);
        console.log(`save id : ${id}`);
        return true;
    }

    find(id: Number): String | Boolean {
        let name: String | undefined = this.dataSource.get(id);
        console.log(id, name);
        if (name === undefined) {
            return false;
        }
        return name;
    }

    delete(id: Number): Boolean {
        if (!this.dataSource.has(id)) {
            console.log(`id : ${id} exist`);
            return false;
        }
        this.dataSource.delete(id);
        console.log(`delete id : ${id}`);
        return true;
    }

    update(id: Number, name: String): Boolean {
        if (this.dataSource.has(id)) {
            this.dataSource.set(id, name);
            console.log(`save id : ${id}`);
            return true;
        } else {
            console.log(`id : ${id} isn't existed`);
            return false;
        }
    }
}

export { HelloRepository };