import { Router } from "express";
import projectsRouter from "../modules/languages/languages-controller";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

router.use("/languages", projectsRouter);

export default router;