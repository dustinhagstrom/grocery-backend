const Grocery = require("../model/Grocery");

const getAllGroceries = async function (req, res) {
  try {
    let foundGroceries = await Grocery.find({});
    res.json({ message: "success", payload: foundGroceries });
  } catch (e) {
    res.json({ message: "failure", error: e.message });
  }
};

const createGrocery = async function (req, res) {
  const { grocery } = req.body;
  try {
    let createdGrocery = new Grocery({
      grocery,
      purchased: false,
    });
    await createdGrocery.save();
    res.json({ message: "success", payload: createdGrocery });
  } catch (e) {
    res.json({ message: "failure", error: e.message });
  }
};

const updateGrocery = async function (req, res) {
  let { grocery, purchased } = req.body;

  try {
    let updatedGrocery = await Grocery.findByIdAndUpdate(
      { _id: req.params.id },
      { grocery, purchased },
      {
        new: true,
      }
    );
    res.json({ message: "success", payload: updatedGrocery });
  } catch (e) {
    res.json({ message: "failure", error: e.message });
  }
};

const deleteGrocery = async function (req, res) {
  try {
    let deletedGrocery = await Grocery.findByIdAndRemove({
      _id: req.params.id,
    });
    res.json({ message: "success", payload: deletedGrocery });
  } catch (e) {
    res.json({ message: "failure", error: e.message });
  }
};

module.exports = {
  getAllGroceries,
  createGrocery,
  updateGrocery,
  deleteGrocery,
};
