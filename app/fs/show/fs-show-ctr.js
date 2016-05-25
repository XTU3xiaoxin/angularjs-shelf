/**
 * Created by xiaoxin on 2016-4-17.
 */
module.exports = function($scope,$http,$stateParams) {
    var id = $stateParams.id;
    console.log(id);
    $http.get('/fs/show/'+id).success(function(data) {
         var newId = id+'-'+data.id;
        $scope.data = data;
        $scope.data.id = newId;

        console.log(newId);
    });
}