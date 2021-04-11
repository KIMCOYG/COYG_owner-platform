const express = require('express')

const PORT = 5000

const app = express();
app.set('port', process.env.PORT || PORT);

app.get('/', (req, res) => {
    res.send('Hello Express!!');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중입니당');
});