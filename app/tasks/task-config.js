module.exports = function($stateProvider) {
    $stateProvider.state('tasks',{
        url:"/tasks",
        abstract: true,
        template:'<div ui-view></div>'
    }).state('tasks.list', {
        url:'/list',
        controller: require('./list/task-list-index-ctr'),
        templateUrl:'tasks/list/task-list-index.html'
        }
    ).state('tasks.new',{
        url:'/new',
        controller:require('./new/task-new-ctr'),
        templateUrl:'tasks/new/task-new.html'
    }).state('tasks.show',{
        url:'/show/:id',
        controller:require('./show/task-show-ctr'),
        templateUrl:'tasks/show/task-show.html'
    });
}