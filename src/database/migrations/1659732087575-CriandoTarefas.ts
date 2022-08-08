import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriandoTarefas1659732087575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tarefas",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "titulo",
            type: "varchar",
          },
          {
            name: "descricao",
            type: "varchar",
          },
          {
            name: "data",
            type: "timestamp",
          },
          {
            name: "duracao",
            type: "integer",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tarefas");
  }
}
