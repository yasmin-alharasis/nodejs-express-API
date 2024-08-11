const express = require('express');
const app = express();

app.use(express.json());//body parser

const coursesRouter = require('./routes/courses.route');
app.use('/api/courses', coursesRouter);



const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})