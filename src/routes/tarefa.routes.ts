import { Router } from "express";
import criarTarefaController from "../modules/tarefas/useCases/criarTarefa";
import editarTarefa from "../modules/tarefas/useCases/editarTarefa";
import excluirTarefa from "../modules/tarefas/useCases/excluirTarefa";
import listarTarefas from "../modules/tarefas/useCases/listarTarefas";

const tarefaRoutes = Router();

tarefaRoutes.post("/", (req, res) => {
  return criarTarefaController().handle(req, res);
});

tarefaRoutes.get("/", (req, res) => {
  return listarTarefas().handle(req, res);
});

tarefaRoutes.put("/:id", (req, res) => {
  return editarTarefa().handle(req, res);
});

tarefaRoutes.delete("/:id", (req, res) => {
  return excluirTarefa().handle(req, res);
});

export default tarefaRoutes;
