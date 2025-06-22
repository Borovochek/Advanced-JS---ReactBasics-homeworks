class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    addError(error) {
        if (!this.errors.has(error.code)) {
            this.errors.set(error.code, error.description);
            return this;
        }
        return 'This bug is already in the repository';
    }

    translate(code) {
        return this.errors.get(code) || 'Unknown error';
    }
}

module.exports = ErrorRepository;
