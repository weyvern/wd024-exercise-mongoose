import Student from '../models/Student.js';

export const createStudent = async (req, res, next) => {
  try {
    const {
      body: { firstName, lastName, email }
    } = req;
    const found = await Student.findOne({ email });
    if (found) throw new Error('Email already taken');
    const newStudent = await Student.create({ firstName, lastName, email });
    res.status(201).send(newStudent);
  } catch (error) {
    next(error);
  }
};
