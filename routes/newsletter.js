const Newsletter = require("../models/Newsletter")
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE Newsletter

router.post("/", async (req, res) => {
    const newNewsletter = new Newsletter(req.body);

    try {
        const savedNewsletter = await newNewsletter.save();
        res.status(200).json(savedNewsletter);
    } catch (err) {
        res.status(500).json(err);
    };
});


//DELETE Newsletter

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Newsletter.findByIdAndDelete(req.params.id);
        res.status(200).json("Slider has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    };
});

//GET Newsletter

router.get("/find/:id", async (req, res) => {
    try {
        const newsletter = await Newsletter.findById(req.params.id);
        res.status(200).json(newsletter);
    } catch (err) {
        res.status(500).json(err);
    };
});

// GET ALL Newsletter

router.get("/", async (req, res) => {
    const query = req.query.new;
    try {
        const newlestter = query
            ? await Newsletter.find().sort({_id: -1}).limit(5)
            : await Newsletter.find();
        res.status(200).json(newlestter);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;