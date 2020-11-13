const router = require('express').Router();
const User = require('./user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        const user = await User.findOne({ email }).select('+password');

        //Confirm user exists and password is correct
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(404).json({
                status: 'fail',
                message: 'Incorrect email or password.'
            });
        }

        //Sign a JsonWebToken for the User
        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: process.env.EXPIRES_IN
        })

        //Send JSON response to client
        return res.status(200).json({
            status: 'success',
            message: 'You are now logged into the application.',
            token
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
});

module.exports = router;