/**
 * Created by xiaoxin on 2016-5-18.
 */
module.exports = function() {
    return {
        restrict:'A',
        replace:true,
        scope:{                //一个独立隔离的scope 与父scope交互的三种方式
            users: '=usersAttr',
            usersStr: '@userstrAttr',
            sayHello:'&clickAttr'
        },
        link:function(scope,ele,attrs) {
            var parent = ele.parent();
             console.log(scope.usersStr);  //["张三","李四","王邬"]
             $.each(scope.users,function(index,element){
                 var tempEle = $('<div></div>').text(element);
                  tempEle.on('click',function(){
                     // scope.sayHello(element);  // 错误：Uncaught TypeError: Cannot use 'in' operator to search for 'sayHello' in 李四
                      scope.sayHello({name:element});
                  });
                 parent.append(tempEle);
             });

        }
    }
}