import '@babel/polyfill';
import { submitForm, getAllData, postToServer } from "../client/js/submitForm";

//submit Function
describe('submitForm should be a function' , () => {
    test('should return true', async () => {
        expect(typeof submitForm).toBe("function");
        expect(submitForm).toBeDefined();
        expect(typeof getAllData).toBe("function");
        expect(getAllData).toBeDefined();
        expect(typeof postToServer).toBe("function");
        expect(postToServer).toBeDefined();
    });
});