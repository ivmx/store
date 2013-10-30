'use strict';


// Declare app level module which depends on filters, and services
angular.module
('myApp', 
	['myApp.filters', 
	 'myApp.services', 
	 'myApp.myServices', 
	 'myApp.directives', 
	 'myApp.controllers'
	 ]
)
.config
	(
		['$routeProvider', function($routeProvider) 
			{
			    $routeProvider.when('/view1', 
		    		{
		    			templateUrl: 'public/partials/partial1.html', 
		    		  	 controller: 'MyCtrl1'
		    		}
	    		);
			    $routeProvider.when('/cart', 
			    	{
			    		templateUrl: 'public/partials/cart.html', 
			    	  	 controller: 'MyCtrl2'
			    	}
		    	);
			    $routeProvider.otherwise
			    (
			    	{redirectTo: '/view1'}
		    	);
			}
		]
	);
