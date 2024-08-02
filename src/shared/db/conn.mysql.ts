import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', //anda asi, cualquier cosa probar con 127.0.0.1 en lugar de localhost
  port: Number(process.env.DB_PORT) || 3307, //agregue esta linea por chatGPT, me deja de  dar el error pero no muestra nada
  user: process.env.DB_USER || 'dsw',
  password: process.env.DB_PASSWORD || 'dsw',
  database: process.env.DB_NAME || 'heroclash4geeks',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
