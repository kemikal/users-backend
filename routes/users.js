var express = require('express');
var router = express.Router();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

let users = [
  {"userId": 1, "firstName": "John", "lastName": "Doe"}, 
  {"userId": 2, "firstName": "Mary", "lastName": "Jane"},
  {"userId": 3, "firstName": "Peter", "lastName": "Parker"}
]

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json(users);
});

router.post("/", (req, res) => { 
  let user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userId: uuidv4()
    };
  users.push(user);
  //res.json("success");

  res.json({"message": "success", "userId": user.userId});

})


module.exports = router;
