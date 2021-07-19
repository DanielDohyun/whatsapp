import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMsgs.js';

const app = express();
const port = process.env.PORT || 5000;

const connection_url = 'mongodb+srv://daniel:abc1234@cluster0.mziqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.status(200).send('working')
})

app.post('/api/v1/messages/new', (req, res) => {
    const dbMsg = req.body
    Messages.create(dbMsg, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.listen(port, () => console.log(`Listening on localhost:${port}`));