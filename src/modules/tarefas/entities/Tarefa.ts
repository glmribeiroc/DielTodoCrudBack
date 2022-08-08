import { v4 as uuidv4 } from "uuid";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("tarefas")
class Tarefa {
  @PrimaryColumn()
  id?: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  data: Date;

  @Column()
  duracao: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export default Tarefa;
