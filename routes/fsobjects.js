/**
 * Created by xiaoxin on 2016-4-17.
 */

var express = require('express');
var router = express.Router();

var fileObject = {
     id:"1",
     name:'文件ID-1',
     children: {
         id:"12",
         name:'文件ID-12',
         children: {
             id:"123",
             name:'文件ID-123',
             children: {
             }
         }
     }
};


router.get('/show/:fileLink',function(req,res,next) {
    var link = req.params.fileLink;;
    var arr = link.split('-');

    var finalObj =  fileObject;
    for(var i = 0,len=arr.length;i<len;i++) {
        finalObj = finalObj.children;
    }
    if(finalObj != null) {
        res.send(finalObj);
    } else {
        res.send({code:"1",msg:"没有子节点了"});
    }

});

module.exports = router;