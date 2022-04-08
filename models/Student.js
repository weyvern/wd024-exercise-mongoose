import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  firstName: { type: String, required: [true, 'Please provide a first name'] },
  lastName: { type: String, required: [true, 'Please provide a last name'] },
  email: { type: String, required: [true, 'Please provide an email'] }
});

const Student = model('Student', studentSchema);

export default Student;
