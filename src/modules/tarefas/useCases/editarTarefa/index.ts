import TarefaRepository from "../../repositories/TarefaRepository";
import EditarTarefaController from "./EditarTarefaController";
import EditarTarefaUseCase from "./EditarTarefaUseCase";

export default () => {
  const tarefaRepository = new TarefaRepository();

  const editarTarefaUseCase = new EditarTarefaUseCase(tarefaRepository);

  const editarTarefaController = new EditarTarefaController(
    editarTarefaUseCase
  );

  return editarTarefaController;
};
