import mysql from 'mysql';
export default class registrosModel {

    constructor() {
        this.connection = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "veterinaria",
        });
      }
      connect() {
        this.connection.connect();
      }
    
      closeConnection() {
        this.connection.end();
      }

      async getAllregistro() {
        const query = 'SELECT id, nombre,apellido,cuidad,email,telefono FROM registros';
        try {
            const results = await new Promise((resolve, reject) => {
              this.connection.query(query, (error, results) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(results);
                }
              });
            });
            return results;
          } catch (error) {
            throw error;

        }
    }
  }

    


