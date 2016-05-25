/**
 * Created by xiaoxin on 2016-4-13.
 */
module.exports = function($stateProvider) {

    $stateProvider.state('account',{
        url:'/account',
        abstract:true,
        template:'<div ui-view></div>'
    }).state('account.login',{
        url:'/login',
        controller:require('./login/account-login-ctr'),
        templateUrl:'account/login/account-login.html'
    });
}