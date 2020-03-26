import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";

import { AllAPIS } from "./api";
import { PORT } from "./config";

const app = express();

app.use(bodyParser.json());

AllAPIS.forEach(api => {
    app[api.method](api.path, async (req: Request, res: Response, next: NextFunction) => {
        try {
            await api.action(req, res);
            next();
        } catch (error) {
            next(error);
        }
    });
});

app.listen(parseInt(PORT, 10));

