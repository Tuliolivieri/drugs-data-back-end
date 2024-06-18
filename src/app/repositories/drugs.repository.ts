import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { connection } from "../../database";

class DrugsRepository {
  private connection: Connection | null = null;

  constructor() {
    this.connection = connection;
  }

  public async findAll(): Promise<any> {
    const result = await connection.promise().query(`
      SELECT 
        * 
      FROM medicamentos
    `, []);

    return result[0];
  }
}

export default new DrugsRepository();
