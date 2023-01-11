const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema (
    {
        email: { type: String, required: true, unique: true },
        cpf: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        secondName: { type: String, required: true, unique: true },
        birthday: { type: String, required: true },
        cep: { type: String, required: true },
        adress: { type: String, required: true },
        completed: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        password: { type: String, required: true },
        confirmPassword: { type: String},
        isAdmin: {
            type: Boolean,
            default: false,
        },
        img: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);