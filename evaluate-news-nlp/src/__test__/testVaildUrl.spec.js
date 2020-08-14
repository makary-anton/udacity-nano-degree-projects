import {urlValidation} from '../client/js/vaildUrl'
import "regenerator-runtime/runtime";

describe('validURL() function Testing' , () => {
    let url = "https://www.foxnews.com/media/alana-goodman-ghislaine-maxwell-arrest-jeffrey-epstein";
    test('have to return true', () => {
        let res = urlValidation(url);
        expect(urlValidation).toBeDefined();
        expect(urlValidation).toBeInstanceOf(Function);
        expect(res).toBeDefined();
        expect(res).toBe(true);

    });
});