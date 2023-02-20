const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var cors=require('cors');
const registerModel=require('./models/register');
app.use(cors())

// Register
app.post("/api/register", async (req, res) =>
{

    const data=req.body;

    try {
        const register=new registerModel(data);
        await register.save();

        res.status(200).redirect("http://127.0.0.1:5500/namma%20medicine/index.html#");
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: {error}
        });
    }
})


//events

const eventsRoute=require("./routes/eventsRoute");
app.use("/api/events", eventsRoute);


app.listen(3000, () => {console.log("Server is running...")});
