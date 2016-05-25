/**
 * Created by xiaoxin on 2016-4-13.
 */
module.exports = function($scope,$http,$stateParams) {
     var taskId = $stateParams.id;
    $http.get("/tasks/task/"+taskId).success(function(data) {
        $scope.task = data;
    })
}