import express from 'express';

var app = express();

app.get('/',(req, res) => { res.send('test') });

export default app;