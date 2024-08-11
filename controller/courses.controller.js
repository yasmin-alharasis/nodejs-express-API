let { courses } = require('../data/courses');
const { validationResult } = require('express-validator');


const getAllCourses = (req, res) => {
    res.json(courses);
}


const getCourse = (req, res) => {
    const courseId = +req.params.courseId;
    const course = courses.find((element) =>
        element.id === courseId
    )
    if (!course) {
        res.status(404).json({ msg: 'Not found' })
    } else {
        res.json(course);
    }
}

const addCourse = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    if (!req.body.title)
        res.status(400).json({ msg: "title not provided" })
    if (!req.body.price)
        res.status(400).json({ msg: "price not provided" })

    const course = { id: courses.length + 1, ...req.body };
    courses.push(course);
    res.status(201).json(course);//201 sucess and created
}

const updateCourse = (req, res) => {
    const courseId = +req.params.courseId;
    let course = courses.find((element) =>
        element.id === courseId
    )
    if (!course) {
        return res.status(404).json({ msg: 'Course not found' })
    }

    course = { ...course, ...req.body };

    res.status(200).json(course);
}

const deleteCourse = (req, res) => {
    const courseId = +req.body.courseId;
    courses = courses.filter((course) => course.id != courseId);

    return res.status(200).json({ "msg": "successfully deleted" })
}

module.exports = {
    getAllCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
}