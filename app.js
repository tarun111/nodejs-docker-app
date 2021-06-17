const express = require('express');
const redis = require("redis");
const client = redis.createClient(6379, 'redis');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    client.incr('key', (err, times) => {
        res.send(`Hi there. You visited this page: ${times}`);
    });    
})

app.listen(port, () => {
    console.log("Server started");
})