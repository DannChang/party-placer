let express = require('express');

let app = express();
let cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const port = 8080;

app.listen(port);
console.log('Magic happens on port ' + port);
