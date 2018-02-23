import * as express from 'express';
import {Application} from 'express';
import * as fs from 'fs';
import * as https from 'https';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app: Application = express();

app.use(cookieParser());
app.use(bodyParser.json());


const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean,  defaultOption: true },
];

const options = commandLineArgs(optionDefinitions);


// REST API
app.route('/random')
    .get('http://thecodinglove.com/random');

// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log('HTTP Server running at http://localhost:' + httpServer.address().port);
});
