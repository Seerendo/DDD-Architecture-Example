import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "../infrastructure/routes/routes";

const app = express();

app.use('/api', router);

app
  .use(morgan("dev"))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

export default app;