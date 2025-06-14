import mongoose from "mongoose";

const checkinSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      default: null,
    },
    endTime: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

checkinSchema.index({ userId: 1, date: 1 }, { unique: true });

export const Checkin = mongoose.model("Checkin", checkinSchema);
