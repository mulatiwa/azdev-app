'use strict';

import dotenv from 'dotenv';
import { HOST } from './app-config.js';

// TODO: check env variables existence
dotenv.config();

//  MongoDB
const MDB_PORT = process.env.MDB_PORT;
const MDB_USER = process.env.MDB_USER;
const MDB_PWD = process.env.MDB_PWD;
const MDB_DB = process.env.MDB_DB;
const MDB_COLLECTION = process.env.MDB_COLLECTION;

const MDB_URI =  `mongodb://${HOST}:${MDB_PORT}/?readPreference=primary&ssl=false` || `mongodb+srv://<${MDB_USER}>:<${MDB_PWD}>@<cluster-url>?retryWrites=true&w=majority`; //-- Connection URI

export { MDB_USER, MDB_PWD, MDB_DB, MDB_COLLECTION, MDB_PORT, MDB_URI };

