import express from "express"
import router from "./routes/recursos";
import cors from "cors"
import {corsOptions} from "./middleware/corsOptions";


const server = express();

server.use(cors(corsOptions));
server.use(express.json());
server.use(router);


export default server;