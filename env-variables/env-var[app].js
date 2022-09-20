'use strict';

import dotenv from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);//  Absolute path to  current file
const __dirname = dirname(__filename);//  Absolute path to current directory
// TODO: check env variables existence

dotenv.config();
//  Environment
const ENV = process.env.NODE_ENV; 
const DEV = process.env.DEV || 'development';
const PROD = process.env.PROD || 'production';
const IS_DEV = ENV === DEV;
const IS_PROD = ENV === PROD;
//  App config
const HOST = process.env.DEV_HOST;
// Public/Private Key
// const PUBLIC_KEY = process.env.PUBLIC_KEY.toString();
// const PRIVATE_KEY = process.env.PRIVATE_KEY.toString();

export { ENV, DEV, PROD, IS_DEV, IS_PROD, HOST };

