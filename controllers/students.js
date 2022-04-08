import Student from '../models/Student.js';

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    next(error);
  }
};

export const createStudent = async (req, res, next) => {
  try {
    const {
      body: { firstName, lastName, email }
    } = req;
    const found = await Student.findOne({ email });
    if (found) throw new Error('Email already taken');
    const newStudent = await Student.create({ firstName, lastName, email });
    res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
};

export const updateStudent = async (req, res, next) => {
  try {
    const {
      params: { id },
      body: { firstName, lastName, email }
    } = req;
    const updatedStudent = await Student.findOneAndUpdate({ _id: id }, { firstName, lastName, email }, { new: true });
    if (!updatedStudent) throw new Error(`The student doesn't exist`);
    res.json(updatedStudent);
  } catch (error) {
    next(error);
  }
};
