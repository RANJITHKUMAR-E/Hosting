const express=require('express');
const router=express.Router();

const eventsModel=require("../models/events");

router.get("/", async (req, res) =>
{
    try {
        const events=await eventsModel.find({});
        res.status(200).json({"data": events});
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: {error}
        });
    }

});

router.post("/", async (req, res) =>
{
    const data=req.body;
    try {
        const event=new eventsModel(data);
        await event.save();

        res.status(200).redirect(req.get('referer'));
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: {error}
        });
    }
});

module.exports=router;