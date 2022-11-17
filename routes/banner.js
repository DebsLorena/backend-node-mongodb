const Banner = require("../models/Banner")
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

<<<<<<< HEAD
//CREATE BANNER
=======
//CREATE SLIDER
>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newBanner = new Banner(req.body);

    try {
        const savedBanner = await newBanner.save();
        res.status(200).json(savedBanner);
    } catch (err) {
        res.status(500).json(err);
    };
});

<<<<<<< HEAD
//UPDATE BANNER

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

=======
//UPDATE SLIDER

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {


>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa
    try {
        const updatedBanner = await Banner.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }

        );
        res.status(200).json(updatedBanner);

    } catch (err) {
        res.status(500).json(err);
    }

});

<<<<<<< HEAD
//DELETE BANNER
=======
//DELETE SLIDER
>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Banner.findByIdAndDelete(req.params.id);
        res.status(200).json("Slider has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    };
});

<<<<<<< HEAD
//GET BANNER
=======
//GET SLIDER
>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa

router.get("/find/:id", async (req, res) => {
    try {
        const banner = await Banner.findById(req.params.id);
<<<<<<< HEAD
=======

>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa
        res.status(200).json(banner);
    } catch (err) {
        res.status(500).json(err);
    };
});

<<<<<<< HEAD
// GET ALL BANNER
=======
// GET ALL SLIDERS
>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let banners;

        if (qNew) {
            banners = await Banner.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            banners = await Banner.find({
                categories: {
                    $in: [qCategory]
<<<<<<< HEAD
                },
            });
        } else {
            banners = await Banner.find()
=======
                }
            });
        } else {
            banners = await Slider.find()
>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa
        }

        res.status(200).json(banners);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;