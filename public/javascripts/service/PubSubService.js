/**
 * Created by xiaoxin on 2016-5-25.
 */
module.exports = function($rootScope) {
    var DATA_UPDATE = '_DATA_UPDATE';

    var publish = function(msg,data) {
        msg = msg || DATA_UPDATE;    //默认是数据更新消息
        data = data || {};
        $rootScope.$emit(msg,data);
    };

    var subscribe = function(func,msg,scope) {
         if(!angular.isFunction(func)) {
             console.log('PubSubService.subscribe need a callback function!');
         }

        msg = msg || DATA_UPDATE;
        var unbind = $rootScope.$on(msg,func);
        if(scope) {
            scope.$on('$destroy',unbind);
        }
    };

    return {
        publish:publish,
        subscribe:subscribe
    };
}