import { connectionDB } from './db/index';
import express from 'express';
import routes  from './routes/index.route';

const app = express();


async function main() {
    await connectionDB();
    app.use(express.json());
    app.use(routes); 
    app.listen(8000, () => {
        console.log('Sever started');
    });
}
main();