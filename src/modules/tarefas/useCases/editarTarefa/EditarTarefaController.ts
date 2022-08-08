import { Request, Response } from "express";
import EditarTarefaUseCase from "./EditarTarefaUseCase";

export default class EditarTarefaController {
  constructor(private editarTarefaUseCase: EditarTarefaUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const tarefaRequest = req.body;

    const tarefa = await this.editarTarefaUseCase.execute(tarefaRequest, id);

    return res.status(201).json({ tarefa });
  }
}
