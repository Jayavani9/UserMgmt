const express = require("express");
const router = express.Router();
const user = require("../models/user");

// CREATE API
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const addUser = await user.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(addUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// GET API
router.get("/", async (req, res) => {
  try {
    const show = await user.find();
    res.status(200).json(show);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// GET SINGLE USER API
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await user.findById(id);
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE API
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const delUser = await user.findByIdAndDelete(id);
    res.status(200).json(delUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//UPDATE API

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const {name, email, age} = req.body;
    try {
      const updUser = await user.findByIdAndUpdate(id, req.body,{
        new : true,
      });
      res.status(200).json(updUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;
