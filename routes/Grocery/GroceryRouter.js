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

router.put("/update-grocery-by-id/:id", updateGrocery);

router.delete("/delete-grocery-by-id/:id", deleteGrocery);

module.exports = router;
