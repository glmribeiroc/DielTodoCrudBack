import { Request, Response } from "express";
import CriarTarefaUseCase from "./CriarTarefaUseCase";

export default class CriarTarefaController {
  constructor(private criarTarefaUseCase: CriarTarefaUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { titulo, descricao, data, duracao } = req.body;

    const tarefa = await this.criarTarefaUseCase.execute({
      titulo,
      descricao,
      data,
      duracao,
    });

    return res.status(201).json({ tarefa });
  }
}
