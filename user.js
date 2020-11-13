const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your username.'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please provide your email address.'],
        validate: [validator.isEmail, 'Your email address should follow the email format.'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password.'],
        select: false,
        minlength: [8, 'Please ensure that your password consists of at least 8 characters.']
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password.'],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'Passwords do not match!'
        }
    }
});

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
});

module.exports = User = mongoose.model('User', userSchema);