import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createServices1603810470391 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'services',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated:true,
          generationStrategy: 'increment'
        },
        {
          name: 'create',
          type: 'varchar'
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'telephone',
          type: 'varchar'
        },
        {
          name: 'address',
          type: 'varchar'
        },
        {
          name: 'model_checked',
          type: 'varchar'
        },
        {
          name: 'status',
          type: 'varchar'
        },
        {
          name: 'observations',
          type: 'text'
        },
        {
          name: 'written_balloon',
          type: 'varchar',
        },
        {
          name: 'balloon_symbol',
          type: 'varchar',
        },
        {
          name: 'amount',
          type: 'integer'
        },
        {
          name: 'day',
          type: 'integer'
        },
        {
          name: 'month',
          type: 'integer'
        },
        {
          name: 'year',
          type: 'integer'
        },
        {
          name: 'delivery_date',
          type: 'varchar',
        },
        {
          name: 'delivery_hours',
          type: 'varchar',
        },
        {
          name: 'value',
          type: 'decimal',
          scale: 2,
          precision: 5
        },
        {
          name: 'entry_value',
          type: 'decimal',
          scale: 2,
          precision: 5
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('services');
  }

}
