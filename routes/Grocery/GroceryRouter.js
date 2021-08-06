const express = require("express");
const router = express.Router();

const {
  getAllGroceries,
  createGrocery,
  updateGrocery,
  deleteGrocery,
} = require("./controller/GroceryController");

router.get("/get-all-groceries", getAllGroceries);

router.post("/create-grocery", createGrocery);

router.put("/update-grocery/:id", updateGrocery);

router.delete("/delete-grocery/:id", deleteGrocery);

module.exports = router;
