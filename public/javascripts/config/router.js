/**
 * Created by xiaoxin on 2016-5-13.
 */
module.exports = function($stateProvider){
    $stateProvider.state('list',{
        url:'/list',
        templateUrl:'/template/user_list.html'
    }).state('detail',{
        url:'/detail/:id',
        templateUrl:'/template/user_detail.html',
        controller:'userDetailCtr'
    }).state('index',{
        url:'/index',
        templateUrl:'/template/match-index.html'
    }).state('formTest',{
        url:'/formTest',
        templateUrl:'/template/form-test.html'
    }).state('directiveTest',{
        url:'/directiveTest',
        templateUrl:'/template/directiveTest.html'
    }).state('main',{
        url:'/main',
        templateUrl:'/template/main.html'
    }).state('main.nav1',{
        url:'/nav1',
        templateUrl:'/template/nav-content1.html',
        controller:'navTest'
    }).state('main.nav2',{
        url:'/nav2',
        templateUrl:'/template/nav-content2.html',
        controller:'navTest'
    }).state('main.nav3',{
        resolve: {
            users:function($http) {
                return  $http.get('/users/info');
            }
        },
        url:'/nav3',
        templateUrl:'/template/nav-content3.html',
        controller:'navTest2'
    }).state('main.nav3.detail', {
        url:'/detail/:id',
        templateUrl:'/template/nav-content3-detail.html',
        controller:'navTest'

    });

}