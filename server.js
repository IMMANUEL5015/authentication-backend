require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Connect to Database
mongoose.connect(process.env.URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(response => console.log(`Connected to database.`))
    .catch(error => console.log(error));

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'API running smoothly.'
    });
});


app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'We could not find what you are looking for!'
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server has started and is running on PORT ${PORT}.`);
});