import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const port = (process.env.PORT) || 3000;

app.use(express.json());

app.get("/about-me", (req: Request, res: Response) => {
  return res.status(200).json({
    fullName: "Samuel Owase",
    location: "Lagos, Nigeria",
    occupation: "Software Engineer",
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});