(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('account/login/account-login.html',
    '<div class="container">\n' +
    '<form name="form" novalidate ng-submit="login(user)">\n' +
    '  <div class="form-group">\n' +
    '    <label>Username</label>\n' +
    '    <input class="form-control" ng-model="user.name" required>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Password</label>\n' +
    '    <input class="form-control" type="password" ng-model="user.password" required>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <button class="btn btn-default" ng-disabled="form.$invalid">Login</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('fs/show/fs-show.html',
    '<div class="container">\n' +
    '    <div class="pull-right">\n' +
    '        <a class="btn btn-default" ui-sref="fs.show({id:data.id})">{{data.name}}</a>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('tasks/list/task-list-index.html',
    '<div class="container">\n' +
    '  <div class="pull-right">\n' +
    '    <a class="btn btn-default" ui-sref="tasks.new">新建task</a>\n' +
    '  </div>\n' +
    '  <h2>Todo Lists</h2>\n' +
    '  <div class="list-group">\n' +
    '    <a\n' +
    '      class="list-group-item"\n' +
    '      ui-sref="tasks.show({ id:task.id})"\n' +
    '      ng-repeat="task in tasks">\n' +
    '      <span class="badge badge-default pull-right">\n' +
    '       {{task.id}}\n' +
    '      </span>\n' +
    '      {{task.name}}\n' +
    '    </a>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('tasks/new/task-new.html',
    '<div class="container">\n' +
    '  <h2>New List</h2>\n' +
    '  <form novalidate ng-submit="save(task)">\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label>ID</label>\n' +
    '      <input class="form-control" ng-model="task.id">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label>Name</label>\n' +
    '      <input class="form-control" ng-model="task.name">\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label>Description</label>\n' +
    '      <input class="form-control" ng-model="task.description">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <button class="btn btn-default">Save</button>\n' +
    '    </div>\n' +
    '  </form>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('tasks/show/task-show.html',
    '<div class="container">\n' +
    '\n' +
    '  <h2>\n' +
    '    {{task.id}}\n' +
    '  </h2>\n' +
    '  <p>{{task.name}}</p>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('CommentsList.html',
    '<div >\n' +
    '    测试\n' +
    '   <ul>\n' +
    '     <li name="tttt" ng-repeat="comment in comments">\n' +
    '            <span name="afee" ng-click="showUser($event)">{{comment.content}}</span>\n' +
    '            <span style="margin-left:10px; display:none;"  >{{comment.username}}</span>\n' +
    '       </li>\n' +
    '   </ul>\n' +
    '    <span ng-transclude></span>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('Dhello.html',
    '<div class="test-font">\n' +
    '    <span ng-transclude></span>\n' +
    '</div>');
}]);
})();
