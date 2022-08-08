import Tarefa from "../../entities/Tarefa";
import TarefaRepository from "../../repositories/TarefaRepository";

class ListarTarefasUseCase {
  constructor(private tarefaRepository: TarefaRepository) {}

  async execute(): Promise<Tarefa[]> {
    const tarefas = await this.tarefaRepository.list();
    return tarefas;
  }
}

export default ListarTarefasUseCase;
