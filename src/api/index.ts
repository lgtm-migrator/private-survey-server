import { APIAction, API } from "./types";

const MetricAction: APIAction = async (req, res) => {
    res.json({
        service: "Private Survey Server",
        status: "Up"
    });
};

const MetricAPI: API = {
    method: "get",
    path: "/",
    action: MetricAction,
};

export const AllAPIS: API[] = [
    MetricAPI
];