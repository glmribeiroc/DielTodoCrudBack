import AppError from "../../../../errors/AppError";
import Tarefa from "../../entities/Tarefa";
import TarefaRepository from "../../repositories/TarefaRepository";

class EditarTarefaUseCase {
  constructor(private tarefaRepository: TarefaRepository) {}

  async execute(tarefaRequest: Tarefa, id: string): Promise<Tarefa> {
    const tarefa = await this.tarefaRepository.findById(id);
    if (!tarefa) {
      throw new AppError("Tarefa não foi encontrada!", 404);
    }
    const tarefaAtualizada = { ...tarefa, ...tarefaRequest };

    await this.tarefaRepository.edit(tarefaAtualizada);

    return tarefaAtualizada;
  }
}

export default EditarTarefaUseCase;
