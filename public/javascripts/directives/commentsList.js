/**
 * Created by xiaoxin on 2016-5-18.
 */
module.exports= function() {   // 需要修改 
    return  {
        restrict:'EA',
        replace:true,
        transclude:true,
        scope:{                //一个独立隔离的scope 与父scope交互的三种方式
            commentList: '=commentsAttr'

        },
        controller:function($scope) {
            $scope.comments = $scope.commentList;
            $scope.showUser = function(event) {
                //注意，这里的this指向的是$scope，而不是当前元素 这和原生js或jquery是有区别的
                //通过event.target获得目标对象
                $(event.target).next().show();

              // this.next().show();
                return false;
            }

            this.clearUsername = function(nextDirective) {
                console.log(nextDirective.message);
            }
        },
        templateUrl:'CommentsList.html',
        link:function($scope,ele) {
          ele.on('click',function() {
          
               alert('触发事件');
            });
        }
    }
}