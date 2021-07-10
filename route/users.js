const express = require('express');
const router = express.Router();
const controller = require(`../controller`);
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/get-user',controller.users.getUser);
router.post('/validate-user',controller.users.valiDateUser);


module.exports = router;