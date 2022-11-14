const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true
        },

        img: {
            type: String,
            required: true 
        },

        categories: {
            type: Array 
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Banner", BannerSchema);