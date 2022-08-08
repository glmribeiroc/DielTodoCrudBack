import AppError from "../../../../errors/AppError";
import TarefaRepository from "../../repositories/TarefaRepository";

export default class ExcluirTarefaUseCase {
  constructor(private tarefaRepository: TarefaRepository) {}

  async execute(id: string): Promise<void> {
    const tarefa = await this.tarefaRepository.findById(id);
    if (!tarefa) {
      throw new AppError("Tarefa não foi encontrada!", 404);
    }
    this.tarefaRepository.delete(tarefa);
  }
}
