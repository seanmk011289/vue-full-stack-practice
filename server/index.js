const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const router = require('./router/routes')
const postsRouter = require('./router/api/posts')


app.use('/api/posts', postsRouter)

app.use('/', router)


//Handle Production
if(process.env.NODE_ENV == 'prodcution') {
    //Static folder
    app.use(express.static(__dirname + '/public'))
    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))


