/**
 * Created by xiaoxin on 2016-4-12.
 */
module.exports = function($scope,$state,Data) {
    $scope.login = function(data) {
        alert(Data.message);
        console.log(data);
        $state.go('tasks.list');
    }
}