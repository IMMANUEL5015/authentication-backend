# Authentication Project

## Description
This project is an API designed to allow it's users to signup and login.

## Main Technologies Used
* Node.js - JavaScript runtime for creating server-side applications.
* Express - Node.js Framework
* MongoDB - NOSQl Database

## Signing Up
* Request:
Request Type: POST

Endpoint: https://authentication-interview-task.herokuapp.com/signup

Request Body Format: (application/json)

Sample Request Body Data: 
```
{
    "username": "immanuel",
    "email": "immanueldiai@gmail.com",
    "password": "test123456",
    "confirmPassword": "test123456"
}
```

* Response
  Status Code: 201 - Created

  Response Body Format: (application/json)

  Sample Response Body Data: 
  ```
  {
    "status": "success",
    "message": "You have successfully created your account.",
    "user": {
        "_id": "5faeaf38ff895b0017846748",
        "username": "immanuel",
        "email": "immanueldiai@gmail.com",
        "password": "$2a$12$m/W370VsH8XCcQx7o5lCFui4OCRaJZtNAennQTRic1Rp4/3MwQK1i",
        "__v": 0
    }
  ``` 

## Logging In
* Request:
 Request Type: POST

Endpoint: https://authentication-interview-task.herokuapp.com/login

Request Body Format: (application/json)

Sample Request Body Data: 
```
{
    "email": "immanueldiai@gmail.com",
    "password": "test123456"
}
```

* Response
  Status Code: 200 - ok

  Response Body Format: (application/json)

  Sample Response Body Data: 
  ```
  {
    "status": "success",
    "message": "You are now logged into the application.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWVhZjM4ZmY4OTViMDAxNzg0Njc0OCIsImlhdCI6MTYwNTI4MzY0OCwiZXhwIjoxNjA1MzcwMDQ4fQ.OhiCfYeGoujufBFn5-84xDQilLgUd9E1iSHIRZQdPP4"
}
  ```