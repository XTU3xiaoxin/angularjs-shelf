var express = require('express');
var router = express.Router();

var users = [
   {
      id:"1111",
      name:"xiaoxin",
      age:88,
      orgname:"信息技术部",
       detail:"国际著名选手，dote一等奖，编程能收"
   },
   {
      id:"1112",
      name:"shanqiu",
      age:98,
      orgname:"信息技术部",
       detail:"国际著名选手，dote二等奖，编程能收"
   },
   {
      id:"1113",
      name:"niutou",
      age:108,
      orgname:"IT规划部",
       detail:"国际著名选手，dote三等奖，编程能收"
   }
   ];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/info',function(req,res,next) {
   res.send(users);
});


router.get('/detail/:userid',function(req,res,next) {
   var userid = req.params.userid;

    users.forEach(function(user) {
         if(userid == user.id) {
              res.send(user);
         }
    });
});

router.post('/',function(req,res,next){
   var newUser = {};
   newUser.id = req.body.id;
   newUser.name = req.body.name;
   newUser.age = req.body.age;
   newUser.orgname = req.body.orgname;
   newUser.detail = req.body.desc;


   users.push(newUser);
   res.send({code:"0"});

});


module.exports = router;
