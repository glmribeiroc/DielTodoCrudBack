import { Request, Response } from "express";
import ListarTarefasUseCase from "./ListarTarefasUseCase";

export default class ListarTarefasController {
  constructor(private listarTarefasUseCase: ListarTarefasUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const tarefas = await this.listarTarefasUseCase.execute();
    return res.status(200).json({ tarefas });
  }
}
