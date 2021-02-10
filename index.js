const express = require('express');
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/api/convert/', (req, res) => {

    if(req.query.from && req.query.to && req.query.amount) {

        const from = req.query.from.toUpperCase().toString();
        const to = req.query.to.toUpperCase().toString();
        const amount = Number(req.query.amount);

        const EXCHANGE_RATES =
        {
            USD: { EUR: 1.21, GBP: 0.72, MXN: 20.10, INR: 72.82, CAD: 1.27 },
            EUR: { USD: 0.83, GBP: 0.88, MXN: 25.36, INR: 88.24, CAD: 1.54 },
            GBP: { USD: 1.38, EUR: 1.14, MXN: 27.77, INR: 100.72, CAD: 1.76 },
            MXN: { USD: 0.05, EUR: 0.041, GBP: 0.036, INR: 3.64, CAD: 0.063 },
            INR: { USD: 0.014, EUR: 0.011, GBP: 0.0099, MXN: 0.27, CAD: 0.017 },
            CAD: { USD: 0.79, EUR: 0.65, GBP: 0.57, MXN: 15.77, INR: 57.34 }


        }

        const total = EXCHANGE_RATES[from][to] * amount;

        res.json({ total: total });

    } else {

        res.json({ message: "Please use request params." })

    }

})


app.listen(port, () => {
    console.log(`Listening at PORT ${port}`);
})