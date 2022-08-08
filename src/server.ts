import cors from "cors";
import "reflect-metadata";
import "./database";
import express, { NextFunction, Request, Response } from "express";
import tarefaRoutes from "./routes/tarefa.routes";
import AppError from "./errors/AppError";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/tarefa", tarefaRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running"));
