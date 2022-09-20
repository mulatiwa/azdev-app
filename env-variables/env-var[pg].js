import dotenv from 'dotenv';

// TODO: check env variables existence
dotenv.config();

//  PostgreSQL
const  PG_PORT = String(process.env.PG_PORT);
const  PG_USER = String(process.env.PG_USER);
const  PG_PWD = String(process.env.PG_PWD);
const  PG_DB = String(process.env.PG_DB);

 const PG_URI = `posgresql://${PG_USER}:${PG_PWD}@database.server.com:${PG_PORT}/${PG_DB}`;

 export { PG_USER, PG_PWD, PG_DB, PG_PORT, PG_URI };

