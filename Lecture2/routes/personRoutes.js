const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

//GET for person
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    //Save the new Person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Interanl server error" });
  }
});

//GET method to get the personn

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//GET person Paramatrized API

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("Response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid WorkType" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//PUT method to update person details

router.put("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const updatedpersonid = req.body;

    const response = await Person.findByIdAndUpdate(personid, updatedpersonid, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(500).json({ error: "Person not found" });
    }

    console.log("data fetched");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//DELETE method to delete person details

router.delete("/:id", async (req, res) => {
  try {
    const personID = req.params.id;

    const response = await Person.findByIdAndRemove(personID);
    if (!response) {
      return res.status(500).json({ error: "Person not found" });
    }

    console.log("Person deleted");
    res.status(200).json({ message: "Person deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
