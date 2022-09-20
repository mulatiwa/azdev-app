import pg from 'pg';
import { host, isDev } from '../../../config/app-config.js.js';
import { PG_DB, PG_PORT, PG_PWD, PG_USER } from '../../../config/pg-config.js.js';



export default async () => {
  // Connection Pool
  const pgPool = new pg.Pool({
    user: PG_USER,
    host: host, 
    database: PG_DB,
    password: PG_PWD,
    port: PG_PORT,
    ssl: isDev ? false : { rejectUnauthorized: false },
  });

  // Test the connection
  const client = await pgPool.connect();
  const tableCountResp = await client.query(
    'select count(*) from information_schema.tables where table_schema = $1;',
    [`${pgDB}`],
  );
  client.release();

  console.info(
    'Connected to PostgreSQL | Tables count:',
    tableCountResp.rows[0].count,
  );

  pgPool.on('error', (err) => {
    console.error('Unexpected PG client error', err);
    process.exit(-1);
  });

  return {
    pgPool,
    pgClose: async () => await pgPool.end(),
  };
};