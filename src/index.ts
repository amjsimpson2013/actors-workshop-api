import express, { Application, Request, Response } from 'express';
import eventRoutes from './routes/eventRoutes';
import cors from 'cors';
import helmet from 'helmet';
import { logger } from './middlewares/logger';

const app: Application = express();
const PORT = process.env['PORT'] || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            connectSrc: ["'self'", 'http://localhost:4200']
        }
    }
}));

app.use(logger);

app.use('/api', eventRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('API is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});