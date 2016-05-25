/**
 * Created by xiaoxin on 2016-5-16.
 */
module.exports = function($scope) {
    $scope.data = {
        'attr1':"属性1",
        'attr2':"属性2"
    }

    $scope.data.users = ['张三','李四','王邬'];

    $scope.sayHello = function(name) {
        alert('hello '+name);
    }

    $scope.data.comments = [
        {content:'the first',username:'xiaoxin'},
        {content:'the first2',username:'xiaoxin2'},
        {content:'the first3',username:'xiaoxin3'}
    ];
}