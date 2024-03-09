import { Router } from "express";
import { ProvincesController } from "../controllers/provinces";

const provincesRoutes = Router();

provincesRoutes.get("/", ProvincesController.getAllProvinces);

export { provincesRoutes };
