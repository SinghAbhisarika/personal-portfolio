
const express = require('express');
require('./db/config');
const User = require('./db/User');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/registerContact', async (req, resp) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
            resp.send(result)
    } catch (error) {
        console.error('Error saving user:', error);
        resp.status(500).send({ error: 'Failed to register user' });
    }
});

app.listen(6002)