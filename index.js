import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import studentsRouter from './routes/studentsRouter.js';
import './db/index.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/students', studentsRouter);
app.get('/', (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
