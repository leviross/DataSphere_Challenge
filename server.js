var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var cors = require('cors');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


router.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});



app.use('/', router);


app.listen(3000);
console.log("Listening on port 3000...");