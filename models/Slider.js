const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true
        },

        desc: {
            type: String,
            required: true
        },

        img: {
            type: String,
            required: true 
        },

        categories: {
            type: Array 
<<<<<<< HEAD
        },
        bg: {
            type: String 
=======
>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Slider", SliderSchema);