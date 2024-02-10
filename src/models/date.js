import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        urlPrimary: {
            type: String,
            required: [true, "El enlace es requerido."],
            trim: true,
        },
        urlShort: String,
    },
    { timestamps: true }
);
export default mongoose.models.Link || mongoose.model("Link", schema);
