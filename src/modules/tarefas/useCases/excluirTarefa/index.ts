import TarefaRepository from "../../repositories/TarefaRepository";
import ExcluirTarefaUseCase from "./EditarTarefaUseCase";
import ExcluirTarefaController from "./ExcluirTarefaController";

export default () => {
  const tarefaRepository = new TarefaRepository();

  const excluirTarefaUseCase = new ExcluirTarefaUseCase(tarefaRepository);

  const excluirTarefaController = new ExcluirTarefaController(
    excluirTarefaUseCase
  );

  return excluirTarefaController;
};
