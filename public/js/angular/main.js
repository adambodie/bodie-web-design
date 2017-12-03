var app = angular.module('mainApp', ['ngResource', 'ui.bootstrap', 'ngMap'])
.filter("reverse", function(){
    return function(items){
        return items.slice().reverse(); // Create a copy of the array and reverse the order of the items
    };
});    
