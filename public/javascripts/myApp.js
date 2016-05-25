
require('./template');

var myModule = angular.module('my-app',['ui.bootstrap','ui.router',
         require('../../app/account/index').name,
         require('../../app/tasks/index').name,
         require('../../app/fs/index').name,'template'])
    .run(function($rootScope){  //$rootscope 是全局scope,所有controller中的scope都可以共享$rootscope中的数据
        $rootScope.message = "this is sharing message from $rootScope";
    })
      .config(require('./config/router'))
      .filter('cityFilter', require('./filter/cityFilter'))
      .controller('userListCtr',require('./controller/userListCtr'))
      .controller('userDetailCtr',require('./controller/userDetailCtr'))
      .controller('matchIndexCtr',require('./controller/matchIndexCtr'))
      .controller('navTest',require('./controller/navTestCtr'))
      .controller('navTest2',require('./controller/navTest2Ctr'))
      .controller('navTestInnerCtr',require('./controller/navTestInnerCtr'))
      .controller('testCtr',require('./controller/testCtr'))
      .controller('formTestCtr',require('./controller/formTestCtr'))
      .controller('directiveCtr',require('./controller/directiveCtr'));

myModule.factory('Data',require('./service/DataShareService'))
    .factory('pubSubService',require('./service/PubSubService'));

myModule.directive('hello',require('./directives/hello'));
myModule.directive('myFocus',require('./directives/myFocus'));
myModule.directive('scopeT',require('./directives/scopeTest'));
myModule.directive('commentList',require('./directives/commentsList'));
myModule.directive('clearUsername',require('./directives/clearUsername'));



