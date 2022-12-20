const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const PORT = process.env.PORT;

app.post('/summer', (req, res) => {
    console.log(req.body)
    res.status(200).send({data: "درخواست شما برای ترم تابستان 99-00 با موفقیت ثبت شد."})
});

app.post('/fall', (req, res) => {
    console.log(req.body)
    res.status(200).send({data: "درخواست شما برای ترم مهر 00-01 با موفقیت ثبت شد."})
});

app.listen(PORT, () => console.log('Server is starting on PORT,', PORT));
