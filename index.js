const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller')

app.post('/', () => {
    controller.index();
})

app.post('/test', () => {
    controller.index();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});