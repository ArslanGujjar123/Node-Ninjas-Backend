const Item = require('../Models/Item');

exports.createItem = async (req, res) => {
    try {
        const {
            name,
            category,
            dateLostFound,
            description,
            location,
            user_email,
            imageUrl,
            type
        } = req.body;

        // if (!name || !category || !type || user_id || description) {
        //     return res.status(400).json({ msg: 'Please include all required fields: name, category, type, and other relevant details.' });
        // }

        const newItem = new Item({
            name,
            category,
            dateLostFound: dateLostFound || "",
            description,
            location: location || "",
            user_email,
            imageUrl: imageUrl || "",
            type
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const {
            name,
            category,
            dateLostFound,
            description,
            location,
            user_id,
            imageUrl,
            type
        } = req.body;

        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    name,
                    category,
                    dateLostFound,
                    description,
                    location,
                    user_id,
                    imageUrl,
                    type
                },
            },
            { new: true, runValidators: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ msg: "Item not found" });
        }

        res.status(200).json(updatedItem);
    } catch (error) {
        console.error("Error updating the item:", error.message);
        res.status(500).json({ msg: "Server error" });
    }
};

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        if (!items || items.length === 0) {
            return res.status(404).json({ message: 'No items have been posted yet.' });
        }
        res.json({ items });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserItems = async (req, res) => {
    try {
        const items = await Item.find({ contactInfo: req.params.id });
        if (!items || items.length === 0) {
            return res.status(404).json({ message: 'No items found for this contact info.' });
        }
        res.json({ items });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item' });
    }
};
