import express, { Application, Response, urlencoded } from 'express';
import eventRoutes from './routes/eventRoutes';
import cors from 'cors';
import helmet from 'helmet';
import { migrateToLatest } from './utils/db/Migrator';
import { AdvertisementRoutes } from './routes/AdvertisementRoutes';

export class App {
    private readonly app: Application = express();
    private readonly port: string = process.env['PORT'] || '';
    private readonly connectionSourceString: string = 'http://localhost:4200';

    public initializeApplication() {
        this.initCrossPolicy();
        this.runMigrations();
        this.initMiddleware();
        this.initRoutes();

        this.app.get('/', (res: Response) => {
            res.send('API is up and running!');
        });

        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }

    private initCrossPolicy(): void {
        this.app.use(cors());
        this.app.use(helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    connectSrc: ["'self'", this.connectionSourceString]
                }
            }
        }));
    }

    private runMigrations(): void {
        migrateToLatest();
    }

    private initMiddleware(): void {
        this.app.use(express.json());
        this.app.use(urlencoded());
    }

    private initRoutes(): void {
        const advertisementRoutes: AdvertisementRoutes = new AdvertisementRoutes();
        this.app.use('/api', eventRoutes);
        this.app.use(advertisementRoutes.defineRoutes());
    }
}