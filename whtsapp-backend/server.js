import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1307376",
    key: "b71a0f746cabcb492a62",
    secret: "e08222f15e1924939bf7",
    cluster: "ap2",
    useTLS: true
  });


app.use(express.json())

app.use(cors());


const connection_Url = 'mongodb+srv://Gyan:7890Poi@@cluster0.c6av6.mongodb.net/Whtsappdb?retryWrites=true&w=majority';

mongoose.connect(connection_Url , {
    useCreateIndex: true,  
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

const db = mongoose.connection;

db.once('open' , () =>{
    console.log("DB Connected");

    const messageCollections = db.collection('messagecontents');
    const changeStream = messageCollections.watch();
    changeStream.on('change' , (change) =>{
        console.log(change);
        if(change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages' , 'inserted',
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timeStamp: messageDetails.timeStamp,
                received: messageDetails.received,
            });
        } else{
            console.log("Error Triggering Pusher");
        }
    })

});

app.get('/' , (req , res) =>{
    res.status(200).send("Hello World");
})

app.get('/messages/sync' , (req , res) =>{
    Messages.find((err , data) =>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/messages/new' , (req , res) =>{
    const dbMessage = req.body;

    Messages.create(dbMessage , (err , data) => {
        if (err) {
            res.status(500).send(err);
        }else {
            res.status(201).send(data);
        }
    })

})


app.listen(port , () =>{
    console.log(`Listening on port Number ${port}`);
})

