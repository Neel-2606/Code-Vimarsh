import { Router } from "express";
import * as controller from "./alumni.controller.js";
import { protect, authorize } from "../../middleware/auth.middleware.js";
const router = Router();
router.get("/", controller.getAll);
router.post("/", protect, authorize("SUPER_ADMIN", "CONTENT_ADMIN"), controller.create);
router.put("/:id", protect, authorize("SUPER_ADMIN", "CONTENT_ADMIN"), controller.update);
router.delete("/:id", protect, authorize("SUPER_ADMIN", "CONTENT_ADMIN"), controller.remove);
export default router;