const ErrorRepository = require('../app.js');

test('adding error to the repo', () => {
    const repo = new ErrorRepository();
    const error1 = { code: 400, description: 'Bad Request' };
    const result = repo.addError(error1);
    expect(result.translate(400)).toBe('Bad Request');
});

test('translate unknow error', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(404)).toBe('Unknown error');
});

test('adding same error to the repo', () => {
    const repo = new ErrorRepository();
    const error1 = { code: 400, description: 'Bad Request' };
    const error2 = { code: 404, description: 'Not Found' };
    const error3 = { code: 500, description: 'Internal Server Error' };
    const result = repo.addError(error1).addError(error2).addError(error3);
    expect(result.addError(error1)).toBe('This bug is already in the repository');
});
