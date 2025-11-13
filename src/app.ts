import express, { Application, Response, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { migrateToLatest } from './utils/db/Migrator';
import { AdvertisementRoutes } from './routes/AdvertisementRoutes';
import { WebhookRoutes } from './routes/WebhookRoutes';
import { PostRoutes } from './routes/PostRoutes';
import { EmailRoutes } from './routes/EmailRoutes';
import { EventsRoutes } from './routes/EventsRoutes';

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
        const webhookRoutes: WebhookRoutes = new WebhookRoutes();
        const postRoutes: PostRoutes = new PostRoutes();
        const emailRoutes: EmailRoutes = new EmailRoutes();
        const eventsRoutes: EventsRoutes = new EventsRoutes();

        this.app.use('/api',  
            advertisementRoutes.defineRoutes(), 
            webhookRoutes.defineRoutes(), 
            postRoutes.defineRoutes(),
            emailRoutes.defineRoutes(),
            eventsRoutes.defineRoutes());
    }
}