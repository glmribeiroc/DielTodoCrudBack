import TarefaRepository from "../../repositories/TarefaRepository";
import ListarTarefasController from "./ListarTarefasController";
import ListarTarefasUseCase from "./ListarTarefasUseCase";

export default () => {
  const tarefaRepository = new TarefaRepository();

  const listarTarefasUseCase = new ListarTarefasUseCase(tarefaRepository);

  const listarTarefasController = new ListarTarefasController(
    listarTarefasUseCase
  );

  return listarTarefasController;
};
