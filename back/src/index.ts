import "reflect-metadata";
import server from "./server";
import {DB_PORT, DB_PORT_DEPLOY, PORT} from "./config/envs";
import { AppDataSource } from "./config/data-source";

const portLocal = PORT||3456;
const dbport = DB_PORT_DEPLOY || DB_PORT;

AppDataSource.initialize()
.then (()=> {
    console.log(`Database connected on port ${dbport}`);

    server.listen(portLocal, () => {
        console.log(`Server listening on PORT ${portLocal}`);
    })
})
.catch((error)=> console.log(error));