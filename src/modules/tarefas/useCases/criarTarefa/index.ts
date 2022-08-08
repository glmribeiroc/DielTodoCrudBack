import TarefaRepository from "../../repositories/TarefaRepository";
import CriarTarefaController from "./CriarTarefaController";
import CriarTarefaUseCase from "./CriarTarefaUseCase";

export default () => {
  const tarefaRepository = new TarefaRepository();

  const criarTarefaService = new CriarTarefaUseCase(tarefaRepository);

  const criarTarefaController = new CriarTarefaController(criarTarefaService);

  return criarTarefaController;
};
