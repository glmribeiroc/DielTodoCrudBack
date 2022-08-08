import Tarefa from "../entities/Tarefa";

interface CriarTarefaRequest {
  titulo: string;
  descricao: string;
  data: Date;
  duracao: number;
}

interface ITarefaRepository {
  list(): Promise<Tarefa[]>;
  create({
    titulo,
    descricao,
    data,
    duracao,
  }: CriarTarefaRequest): Promise<Tarefa>;
  edit(tarefa: Tarefa): Promise<void>;
  findById(id: string): Promise<Tarefa>;
  delete(tarefa: Tarefa): Promise<void>;
}

export { ITarefaRepository, CriarTarefaRequest };
