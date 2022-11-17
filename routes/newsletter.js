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
    const qNew = req.query.new;
    // const qCategory = req.query.category;
    try {
        let newsletters;

        if (qNew) {
            newsletters = await Newsletter.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            newsletters = await Newsletter.find({
                categories: {
                    $in: [qCategory]
                },
            });
        } else {
            newsletters = await Newsletter.find()
        }

        res.status(200).json(newsletters);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;