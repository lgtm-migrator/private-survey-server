
const services = {};

export const getService = <T>(t: new () => T): T => {
    if (!services[t.name]) {
        services[t.name] = new t();
    }
    return services[t.name];
};

export { SerializeService } from "./SerializeService";