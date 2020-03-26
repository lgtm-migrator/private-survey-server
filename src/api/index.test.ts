import { AllAPIS } from ".";

describe('API Tests', () => {

    it('should have at least 1 API', () => {
        expect(AllAPIS.length > 0).toBeTruthy();
    });

});