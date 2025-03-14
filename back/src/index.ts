import "reflect-metadata";
import server from "./server";
import {DB_PORT, PORT} from "./config/envs";
import { AppDataSource } from "./config/data-source";

const portLocal = PORT||3456;
AppDataSource.initialize()
.then (()=> {
    console.log(`Database connected on port ${DB_PORT}`);

    server.listen(portLocal, () => {
        console.log(`Server listening on PORT ${portLocal}`);
    })
})
.catch((error)=> console.log(error));