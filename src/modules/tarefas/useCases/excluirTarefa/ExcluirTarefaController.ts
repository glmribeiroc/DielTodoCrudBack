import { Request, Response } from "express";
import ExcluirTarefaUseCase from "./EditarTarefaUseCase";

export default class ExcluirTarefaController {
  constructor(private excluirTarefaUseCase: ExcluirTarefaUseCase) {}

  handle(req: Request, res: Response): Response {
    const id = req.params.id;
    this.excluirTarefaUseCase.execute(id);
    return res.status(201).send();
  }
}
