// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
	var result = [];

    var searchChildren = function(element) {

        if (element.hasClass(className)) {
            result.push(element.toArray().pop());
        }

        if (element.children().length !== 0) {
            searchChildren(element.children().first());
        }

        if (element.next().length !== 0) {
            searchChildren(element.next());
        }
    };

    searchChildren($("html"))
    return result;
};
