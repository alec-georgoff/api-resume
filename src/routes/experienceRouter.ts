import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(201).send("This is my experience router");
});

export default router;
