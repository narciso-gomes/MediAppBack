import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  doctorId: {
    type: String,
    required: [true, "Doctor ID is required"],
    unique: true,
  },
  name: { type: String, required: [true, "Doctor Name is required"] },
  login: {
    type: String,
    required: [true, "Doctor Login is required"],
    unique: true,
  },
  password: { type: String, required: [true, "Doctor Password is required"] },
  medicalSpecialty: {
    type: String,
    required: [true, "Medical Specialty is required"],
  },
  medicalRegistration: {
    type: String,
    required: [true, "Medical Registration is required"],
  },
  email: { type: String, required: [true, "Doctor Email is required"] },
  phone: { type: String, required: [true, "Doctor Phone is required"] },
  createdAt: { type: Date, default: Date.now },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;