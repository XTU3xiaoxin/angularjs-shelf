module.exports = function () {
    return function (data, parent) {
        var filterData = [];
        angular.forEach(data, function (obj) {
            if (obj.parent === parent) {
                filterData.push(obj);
            }
        })

        return filterData;
    }
}