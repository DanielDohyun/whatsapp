import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMsgs.js';
import Pusher from 'pusher';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const connection_url = 'mongodb+srv://daniel:abc1234@cluster0.mziqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const pusher = new Pusher({
    appId: "1237969",
    key: "04c18eb85f42c862198d",
    secret: "0c1004c1de902a2b77d5",
    cluster: "us2",
    useTLS: true
});
  
const db = mongoose.connection;

db.once('open', () => {
    console.log('DB connected');

    const msgCollection = db.collection('msgcontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        // console.log(change);
        if (change.operationType === 'insert') {
            const msgDetails = change.fullDocument;
            pusher.trigger('msgs', 'inserted',
                {
                    name: msgDetails.name,
                    message: msgDetails.message,
                    timestamp: msgDetails.timestamp,
                }
            );
        } else {
            console.log('Error triggering pusher')
        }
    })
});

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.status(200).send('working')
})

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post('/messages/new', (req, res) => {
    const dbMsg = req.body
    Messages.create(dbMsg, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));