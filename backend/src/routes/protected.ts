import { Router } from "express";
const router = Router();

import { verify } from "../middleware/verify-token";
import { sampleController } from "../controllers/protected";

router.get('/', verify, sampleController)

export default router