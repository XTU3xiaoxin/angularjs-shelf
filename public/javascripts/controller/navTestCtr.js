/**
 * Created by xiaoxin on 2016-5-13.
 */
module.exports = function($scope,$http,$stateParams,pubSubService){

    $scope.content1 = "nav-content1";
    $scope.content2 = "nav-content2";
    $scope.content3 = "nav-content3";

    var param = $stateParams.id;
    if( !angular.isUndefined(param)) {
        $http.get('users/detail/'+$stateParams.id).success(function(data){
            $scope.user = data;
        })
    }

    $scope.$on('$destroy',function() {
        console.log('navTestCtr will destroy!');
    });

    $scope.$on('$viewContentLoaded',function() {
        console.log('navTestCtr will be created!');
    });


    pubSubService.subscribe(function(event,data){
        console.log(event);
        console.log("receive msg:"+data.message);
        $scope.msg = data.message;
    },'show',$scope);

}