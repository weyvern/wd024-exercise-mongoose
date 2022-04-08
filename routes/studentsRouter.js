import { Router } from 'express';
import { createStudent, getAllStudents, updateStudent } from '../controllers/students.js';
import validateJOI from '../middlewares/validateJOI.js';
import { student } from '../joi/schemas.js';

const studentsRouter = Router();

studentsRouter.route('/').get(getAllStudents).post(validateJOI(student), createStudent);
studentsRouter.route('/:id').put(validateJOI(student), updateStudent);

export default studentsRouter;
