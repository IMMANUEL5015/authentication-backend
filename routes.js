const router = require('express').Router();
const User = require('./user');

router.post('/signup', async (req, res, next) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        });

        return res.status(201).json({
            status: 'success',
            message: 'You have successfully created your account.',
            user
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
});

router.post('/login', async (req, res, next) => {
    try {
        //Ensure that email and password are present
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide your email and password'
            });
        }

        //Find user with email and drag the password along

        //Confirm that the password is correct

        //Sign a JsonWebToken for the User

        //Send JSON response to client
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
});

module.exports = router;