class HelloRepository {
    private _database: Map<Number, String>; //나중에 DB pool이나 connection을 받아오면 될것.

    constructor(database: Map<Number, String>) {
        this._database = database;
    }
    
    save(id: Number, name: String): Boolean {
        if(this._database.has(id)){
            console.log(`id : ${id} exist`);
            return false;
        }
        this._database.set(id, name);
        console.log(`save id : ${id}`);
        return true;    
    }

    find(id: Number): String | Boolean {
        let name: String | undefined = this._database.get(id);
        console.log(id,name);
        if (name === undefined) {
            return false;
        }
        return name;
    }

    delete(id: Number): Boolean {
        if(!this._database.has(id)){
            console.log(`id : ${id} exist`);
            return false;
        }
        this._database.delete(id);
        console.log(`delete id : ${id}`);
        return true;   
    }

    update(id: Number, name: String): Boolean {
        if (this._database.has(id)) {
            this._database.set(id, name);
            console.log(`save id : ${id}`);
            return true;
        } else {
            console.log(`id : ${id} isn't existed`);
            return false;
        }
    }
}

export default HelloRepository;