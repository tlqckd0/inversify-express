import HelloRepository from "../repository/hello.repository";

class HelloService {
    private _helloRepository: HelloRepository;
    constructor(repository: any) {
        this._helloRepository = repository;
    }

    save_info(id: Number, name: String): Boolean {
        return this._helloRepository.save(id, name);
    }

    delete_info(id: Number): Boolean {
        return this._helloRepository.delete(id);
    }

    find_info(id: Number): String | Boolean {
        return this._helloRepository.find(id);
    }

    update_info(id: Number, name: String): Boolean {
        return this._helloRepository.update(id, name);
    }
}

export default HelloService;