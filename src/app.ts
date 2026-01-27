import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CardRoutes } from './modules/card/card.router';

const app: Application = express();

app.use(express.json());
app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000", 
    credentials: true
}));

app.use("/api/v1/cards", CardRoutes);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get('/', (req: Request, res: Response) => {
  res.send('Card Operation Server is Running! 🚀');
});

export default app;