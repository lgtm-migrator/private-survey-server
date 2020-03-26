import { Request, Response } from "express";

export interface APIAction {
    (req: Request, res: Response): Promise<void>;
}

export interface API {
    path: string;
    method: "get" | "post" | "delete" | "patch" | "update";
    action: APIAction;
}

