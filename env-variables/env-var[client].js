import dotenv from 'dotenv';
import { HOST } from './env-var[app].js';

// TODO: check env variables existence
dotenv.config();

const CLIENT_PORT = process.env.CLIENT_PORT;

const CLIENT_URI =`http://${HOST}:${CLIENT_PORT}`;//ClientEndpoint
const CLIENT_TITLE = process.env.CLIENT_TITLE;

export { CLIENT_PORT, CLIENT_URI, CLIENT_TITLE };

