export default class ErrorRepository {
    constructor() {
        this.ErrorRepositoryMap = new Map([
            [400, 'bad reqest'],
            [404, 'Not found'],
            [505, 'internal server error'],
        ]);
    }

    translate(code) {
        return this.ErrorRepositoryMap.get(code) || 'Uncnown error';
    }
}