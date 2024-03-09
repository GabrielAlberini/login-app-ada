import { Request, Response } from "express";
import { ModelProvinces } from "../models/provices";

abstract class ProvincesController {
  static getAllProvinces = (req: Request, res: Response) => {
    const data = ModelProvinces.getAllProvinces();
    if (!data) return res.status(404).json({ error: "ERROR_TO_READ_DB" });
    res.json(data);
  };
}

export { ProvincesController };
