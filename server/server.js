let express = require('express');

let app = express();
let cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cors());

const port = 8080;

app.listen(port);
console.log('Magic happens on port ' + port);
