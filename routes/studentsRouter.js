import { Router } from 'express';
import { createStudent, getAllStudents, updateStudent } from '../controllers/students.js';

const studentsRouter = Router();

studentsRouter.route('/').get(getAllStudents).post(createStudent);
studentsRouter.route('/:id').put(updateStudent);

export default studentsRouter;
