/**
 * Created by xiaoxin on 2016-4-13.
 */
module.exports = function($scope,$http,$state) {
    $scope.save = function (task) {
        console.log(task.id);
        console.log(task.name);
        $http.post('/tasks/task', task).success(function (data) {
            if ("0" == data.code) {
                console.log('保存信息成功');
                $state.go('tasks.list');
            } else {
                alert("保存todo任务失败");
            }
        })
    }
}