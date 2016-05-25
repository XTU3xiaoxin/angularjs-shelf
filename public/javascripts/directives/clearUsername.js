/**
 * Created by xiaoxin on 2016-5-18.
 */
module.exports = function() {
    return  {
        restrict:'EA',
        replace:true,
        template:'<button>隐藏用户</button>',

        //require: ‘^outerDirective’ 告诉Angular在元素以及它的父元素中搜索controller。
        // 这样被找到的 controller 实例会作为第四个参数被传入到 link 函数中 .
        //注意，是当前指令元素本身上去搜索，不是兄弟元素
        require:'^commentList',  //
        link:function(scope,ele,attrs,ctr) {
            ele.on('click',function() {
                scope.message="the message is from clearUsername directive!";
                ctr.clearUsername(scope);
            });
        }

    }
}