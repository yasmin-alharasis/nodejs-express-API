# nodejs-express-API
simple crud system
_____________________________________________________________

# GET / get-courses
localhost:3000/api/courses

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# GET / get-single-course
localhost:3000/api/courses/1

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# POST / add-course
localhost:3000/api/courses

Body / raw (json)

    {
        "title": "test",
        "price": 200
    }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# PATCH / update-course
localhost:3000/api/courses/1

Body / raw (json)

    {
        "price":"1500"
    }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# DELETE / delete-course
localhost:3000/api/courses/1
