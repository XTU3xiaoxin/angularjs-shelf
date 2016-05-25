/**
 * Created by xiaoxin on 2016-5-18.
 */

/** 知识点:
 * 默认情况下，指令并不会创建新的子scope。更多的，它使用父scope。也就是说，如果指令存在于一个controller下，
 * 它就会使用这个controller的scope .所以scope.data.attr2是父scope中的值
 *
 * @returns {{restrict: string, link: link}}
 */
module.exports = function() {
    return {
        restrict:'EA',
        link:function(scope,ele,attrs) {
            console.log(scope.data.attr2);  // 属性2
            console.log(attrs.type);    //text
            console.log(attrs.datas);   //属性1
            ele.focus();     //如果引用了jquery ele则是jquery对象，如果没有，则是angular自带的对象
        }
    };
}