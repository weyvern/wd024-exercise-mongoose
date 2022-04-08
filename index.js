import express from 'express';
import studentsRouter from './routes/studentsRouter.js';
import './db/index.js';

const app = express();
const port = process.env.PORT || 5000;

app.use('/students', studentsRouter);
app.get('/', (req, res) => res.send('Hello there'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
