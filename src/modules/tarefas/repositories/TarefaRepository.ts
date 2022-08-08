import { getRepository, Repository } from "typeorm";
import Tarefa from "../entities/Tarefa";
import { ITarefaRepository, CriarTarefaRequest } from "./ITarefaRepository";

class TarefaRepository implements ITarefaRepository {
  private repository: Repository<Tarefa>;

  constructor() {
    this.repository = getRepository(Tarefa);
  }

  async create({
    titulo,
    descricao,
    data,
    duracao,
  }: CriarTarefaRequest): Promise<Tarefa> {
    const tarefa = this.repository.create({
      titulo,
      descricao,
      data,
      duracao,
    });

    await this.repository.save(tarefa);

    return tarefa;
  }

  async list(): Promise<Tarefa[]> {
    const tarefas = await this.repository.find();
    return tarefas;
  }

  async findById(id: string): Promise<Tarefa> {
    const tarefa = await this.repository.findOne({ id });
    return tarefa;
  }

  async edit(tarefa: Tarefa): Promise<void> {
    await this.repository.save(tarefa);
  }

  async delete(tarefa: Tarefa): Promise<void> {
    await this.repository.remove(tarefa);
  }
}

export default TarefaRepository;
