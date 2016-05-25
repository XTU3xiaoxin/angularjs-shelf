/**
 * Created by xiaoxin on 2016-4-13.
 */

var express = require('express');
var router = express.Router();


var tasks = [
    {
        id:"11",
        name:"这是任务一"
    },
    {
        id:"12",
        name:"这是任务二"
    }
]
router.get('/',function(req,res,next) {
    res.send(tasks);
});

router.get('/task/:id',function(req,res,next) {
    var taskId = req.params.id;
    tasks.forEach(function(ele,index) {
        console.log("forEach；"+ele);
        if(taskId == ele.id) {
            res.send(ele);
        }
    });

    res.send({code:"1",message:"找不对对应的todo task"});
});


router.post('/task',function(req,res,next) {
    var task = {};
    task.id = req.body.id;
    task.name = req.body.name;
    tasks.push(task);
    res.send({code:"0",message:"保存信息成功!"});
});

module.exports = router;