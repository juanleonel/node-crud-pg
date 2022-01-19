import { connectionDB } from './db/index';
import express from 'express';
import routes  from './routes/index.route';
import cors from 'cors';
const app = express();


async function main() {
    
    app.use(cors());

    await connectionDB();
    app.use(express.json());// esto habilita la serializacion en formato json
    app.use(routes); 
    app.listen(8000, () => {
        console.log('Sever started');
    });
}
main();