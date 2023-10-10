import express, { Request, Response } from "express";
import experienceRouter from "./routes/experienceRouter";
import educationRouter from "./routes/educationRouter";
import projectsRouter from "./routes/projectsRouter";
import hobbiesRouter from "./routes/hobbiesRouter";

const app = express();
const port = process.env.PORT || 3000;

app.use("/experience", experienceRouter);
app.use("/education", educationRouter);
app.use("/projects", projectsRouter);
app.use("/hobbies", hobbiesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
