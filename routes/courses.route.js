const express = require('express');
const router = express.Router();

const coursesController = require('../controller/courses.controller');
const { validationSchema } = require('../middlewares/validationSchema')

router.route('/')
    .get(coursesController.getAllCourses)
    .post(
        validationSchema(),
        coursesController.addCourse)

//get single course
router.route('/:courseId')
    .get(coursesController.getCourse)
    .patch(coursesController.updateCourse)
    .delete(coursesController.deleteCourse)

module.exports = router