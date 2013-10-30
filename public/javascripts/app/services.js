'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

angular.module('myApp.myServices',[]).factory('testService', function()
	{
		var total = 0;

		return{
			setTotal: function(t)
			{
				total = t;
			},
			getTotal: function()
			{
				return total;
			}
		}
	}
);
