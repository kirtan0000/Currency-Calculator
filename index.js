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

        const from = req.query.from.toUpperCase();
        const to = req.query.to.toUpperCase();
        const amount = Number(req.query.amount);
        let total = 0;

        // USD

        if(from == "USD" && to == "EUR") {

            res.json({ total: amount * 1.21 });
            
        } 
        else if (from == "USD" && to == "GBP") {

            res.json({ total: amount * 0.72 });
            
        }
        else if (from == "USD" && to == "MXN") {

            res.json({ total: amount * 20.10 });
            
        }
        // EUR
        else if(from == "EUR" && to == "USD") {

            res.json({ total: amount * 0.83 });
            
        } else if(from == "EUR" && to == "GBP") {

            res.json({ total: amount * 0.88 });
            
        }
        else if (from == "EUR" && to == "MXN") {

            res.json({ total: amount * 24.36 });
            
        }
        // GBP
        else if(from == "GBP" && to == "USD") {

            res.json({ total: amount * 1.38 });
            
        } else if(from == "GBP" && to == "EUR") {

            res.json({ total: amount * 1.14 });
            
        }
        else if (from == "GBP" && to == "MXN") {

            res.json({ total: amount * 27.77 });
            
        }
        // MXN
        else if(from == "MXN" && to == "USD") {

            res.json({ total: amount * 0.05 });
            
        } else if(from == "MXN" && to == "EUR") {

            res.json({ total: amount * 0.041 });
            
        }
        else if (from == "MXN" && to == "GBP") {

            res.json({ total: amount * 0.036 });
            
        } else if(from == to) {

            res.json({ total: amount });


        }


        res.json({ amount: amount });

    } else {

        res.json({ message: "Please use request params." })

    }

})


app.listen(port, () => {
    console.log(`Listening at PORT ${port}`);
})