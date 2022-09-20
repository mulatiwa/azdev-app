import dotenv from 'dotenv';
import { HOST } from './env-var[app].js';

// TODO: check env variables existence
dotenv.config();
//  API config
const SERVER_PORT = process.env.API_PORT;
const SERVER_URI =`http://${HOST}:${SERVER_PORT}`;//API URI
const GQL_URI =`http://${HOST}:${SERVER_PORT}/gql`;//API URI
const GQL_SUBSCRIPTION_URI = `ws://${HOST}:${SERVER_PORT}/gql`;//GQL Websocket URI

export { SERVER_PORT, SERVER_URI, GQL_URI, GQL_SUBSCRIPTION_URI };

