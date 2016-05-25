/**
 * Created by xiaoxin on 2016-4-17.
 */
module.exports = function($stateProvider) {
    $stateProvider.state('fs',{
        url:'/fs',
        abstract:true,
        template:'<div ui-view></div>'
    }).state('fs.show',{
       url:'/show/:id',
        controller:['$scope','$http','$stateParams',require('./show/fs-show-ctr')],
        templateUrl:'fs/show/fs-show.html'
    });
}