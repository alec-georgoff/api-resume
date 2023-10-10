import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(201).send("This is my hobbies router");
});

export default router;
