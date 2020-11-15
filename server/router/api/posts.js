const express = require('express');
const mongodb = require('mongodb');

const db = require('../../db')

const router = express.Router()

//Get Posts
router.get('/', async (req, res) => {
    const dbase = await db();
    res.send(await dbase.collection('posts').find({}).toArray())
})

//Add Posts
router.post('/', async (req, res) => {
    const dbase = await db();
    await dbase.collection('posts').insertOne({
        text: req.body.text,
        createdAt: new Date()
    })
    res.status(201).send()
})

//Delete Posts
router.delete('/:id', async (req, res) => {
    const dbase = await db();
    await dbase.collection('posts').deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send()
})



/////Did this outside of this file
//Connect to the Database
// async function loadPostsCollection() {
//     const client = await mongodb.MongoClient.connect
//     ('mongodb+srv://todoAppUser:WUqHU0XAMNN0qa3e@cluster0.z7dbr.mongodb.net/Vue_Full_Stack_Practice?retryWrites=true&w=majority',
//     {useNewUrlParser: true,
//     useUnifiedTopology: true   
//     });
//     return client.db('Vue_Full_Stack_Practice')
// }


module.exports = router