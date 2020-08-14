import { submitFormFun } from "../client/js/submitForm"

describe('submitFormFun() function Testing', () => {
    test('have to return true', () => {
        expect(submitFormFun).toBeDefined();
        expect(submitFormFun).toBeInstanceOf(Function);
    });
})
