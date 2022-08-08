import Tarefa from "../../entities/Tarefa";
import { ITarefaRepository } from "../../repositories/ITarefaRepository";

class CriarTarefaUseCase {
  constructor(private tarefaRepository: ITarefaRepository) {}

  async execute({ titulo, descricao, data, duracao }): Promise<Tarefa> {
    const tarefa = await this.tarefaRepository.create({
      titulo,
      descricao,
      data,
      duracao,
    });
    return tarefa;
  }
}

export default CriarTarefaUseCase;
