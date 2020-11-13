require('dotenv').config();
const express = require('express');
const app = express();

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