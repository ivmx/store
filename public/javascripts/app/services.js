'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

/*angular.module('myApp.myServices',['ngResource']).factory('testService', function()
	{
		return $resource('http://localhost\\:3000/productos/:id', {id:'@id'}, {
         query: {method:'GET', params:{id:''}, isArray:true},
          post: {method:'POST'},
        update: {method:'PUT'},
        remove: {method:'DELETE'}
    });
);*/