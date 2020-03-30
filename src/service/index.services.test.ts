import { getService, SerializeService } from ".";

describe('Service Test Suite', () => {

    it('should create new service', () => {
        const s = getService(SerializeService);
        expect(s.getServiceName()).toBe("SerializeService"); // service name
        expect(s === getService(SerializeService)).toBeTruthy(); // single instance
    });

});