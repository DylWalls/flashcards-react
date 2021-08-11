import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css'

const config = require('config');
const mongoose = require('mongoose');
mongoose
    .connect(
        config.get('mongoURI'),
    { useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Could not connect to MongoDB. ERROR: ${err}'));

ReactDOM.render(<App />, document.getElementById('root'));
