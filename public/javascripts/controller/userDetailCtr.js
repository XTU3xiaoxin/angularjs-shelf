/**
 * Created by xiaoxin on 2016-5-13.
 */
module.exports = function($scope,$http,$stateParams){
    $http.get('users/detail/'+$stateParams.id).success(function(data){
        $scope.user = data;
    })
}