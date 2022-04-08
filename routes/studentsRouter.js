import { Router } from 'express';
import { createStudent } from '../controllers/students.js';

const studentsRouter = Router();

studentsRouter.post('/', createStudent);

export default studentsRouter;
