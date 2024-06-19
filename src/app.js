import express from 'express';
import userRoutes from './routes/userRoutes.js'
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(helmet());

app.use('/api/users', userRoutes);

export default app;