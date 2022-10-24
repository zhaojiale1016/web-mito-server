const mysql = require("mysql");
const config = require("../sql/config");
const pool = mysql.createPool(config);

const query = function (sql, val) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, val, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = query;
