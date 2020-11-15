const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("HEY BITCH")
})

module.exports = router;