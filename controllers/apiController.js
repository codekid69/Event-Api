const User = require("../model/model");

// Getting the user via Query

module.exports.getUser = async function (req, res) {
    try {
        const id = await req.query.id;
        const type=await req.query.type;
        let event = await User.findById(id);
        let events = await User.find({type});
        if (event) {
            return res.status(200).json({ message: "Event Found", Event: event });
        }
        else if(events){
            return res.status(200).json({ message: "Event Found", Event: events });
        }
        return res.status(404).json({ message: "Event Doesn't exist" });
    } catch (error) {
        console.log(error);
    }
};

// Getting Limit Events via Query
module.exports.getEvents = async function (req, res) {
    const type = req.query.type;
    console.log(type);
    try {
        let events;
        if (type) {
            events = await User.find(type);
        } else {
            events = User.find();
        }
       return res.status(200).json({message:"Here are the Evenets based on request",Events:events});
    } catch (error) {
        return res.status(400).json({ message: "Error in fetching the Event" });
    }
}

// Creating the new Event

module.exports.postUser = async function (req, res) {
    try {
        const existedUser = await User.findOne({ uid: req.body.uid });
        if (existedUser) {
            return res.status(401).json("Event already exist");
        }
        const user = await new User({
            type: req.body.type,
            name: req.body.name,
            tagline: req.body.tagline,
            schedule: req.body.schedule,
            description: req.body.description,
            image: req.body.image,
            moderator: req.body.moderator,
            category: req.body.category,
            sub_category: req.body.sub_category,
            rigor_rank: req.body.rigor_rank,
            attendees: req.body.attendees,
        });
        await user.save();
        return res.status(200).json({ message: "Event Saved", data: user._id });
    } catch (error) {
        console.log("error occured", error);
        return;
    }
};

// Updating the Event

module.exports.updateUser = async function (req, res) {
    if (req.body.userId === req.params.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            return res
                .status(200)
                .json({ message: "Event Updated Sucessfully", Event: updatedUser });
        } catch (error) {
            return res.json(500).json({ message: "Error In updating the user" });
        }
    }
    else {
        return res.json(401).json({ message: "Unauthorised updation request" });

    }
};

// Deleting the Event

module.exports.deleteUser = async function (req, res) {
    if (req.body.userId == req.params.id) {
        try {
            const id = req.params.id;
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Evenet Deleted", id: id });
        } catch (error) {
            return res.status(500).json({ message: "Error in deleting the user" });
        }
    }
    else {
        return res.status(401).json({ message: "Unauthorised Delete Request" });
    }
}
