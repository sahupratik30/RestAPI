const express = require("express");
const Student = require("../models/students");
const router = new express.Router();

//Registering Students.
router.post("/students", (req, res) => {
  const student = new Student(req.body);
  student
    .save()
    .then(() => {
      res.status(201).send(student);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

//Get students data.
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Get individual student data through id.
router.get("/students/:id", async (req, res) => {
  try {
    const studentData = await Student.findById(req.params.id);
    res.status(200).send(studentData);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Update individual student data through id.
router.patch("/students/:id", async (req, res) => {
  try {
    const updatedStudentData = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, useFindAndModify: false }
    );
    res.status(200).send(updatedStudentData);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Delete individual student data through id.
router.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudentData = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.status(200).send(deletedStudentData);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
