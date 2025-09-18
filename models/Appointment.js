import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: { type: Date, required: [true, "Appointment Date is required"] },
  doctorId: {
    type: String,
    required: [true, "Doctor ID is required"],
  },
  pacientId: {
    type: String,
    required: [true, "Pacient ID is required"],
  },
  createdAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
