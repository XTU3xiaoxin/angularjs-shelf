/**
 * Created by xiaoxin on 2016-4-13.
 */
module.exports = function($scope,$http) {

    console.log("进入task list 页面咯.....");
    $http.get('/tasks').success(function(data) {
        console.log(data);
        $scope.tasks = data;
    });
    
}