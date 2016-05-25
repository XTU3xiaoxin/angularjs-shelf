
module.exports = function($scope,pubSubService) {

    $scope.publish = function() {
        console.log("begin to publish message  ");
        pubSubService.publish('show',{message:"this message from navTestInnerCtr！"});
    };

}