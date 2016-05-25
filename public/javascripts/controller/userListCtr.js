/**
 * Created by xiaoxin on 2016-5-13.
 */
module.exports = function($scope,$http){
    $http.get('/users/info').success(function(data) {
        $scope.users = data;
    });
    $scope.orderPro = '-age';
    $scope.isShow = false;
    $scope.showCreate = function() {
        $scope.isShow = true;
    };

    $scope.saveUser = function() {
        $http.post('/users/', $scope.newUser).success(function(data) {
            if(data.code == '0') {
                alert('更新成功');
                $scope.users.push($scope.newUser);
            }
        });
    };

}