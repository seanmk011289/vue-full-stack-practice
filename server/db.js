const mongodb = require('mongodb')

const db = async function() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://todoAppUser:WUqHU0XAMNN0qa3e@cluster0.z7dbr.mongodb.net/Vue_Full_Stack_Practice?retryWrites=true&w=majority',
    {useNewUrlParser: true,
    useUnifiedTopology: true   
    });
    return client.db('Vue_Full_Stack_Practice')
}

module.exports = db;