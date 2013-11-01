/* Controllers */
var app = angular.module('myApp.controllers', ['ngResource']);

var cartCtrl = function($scope, $resource)
{
    $scope.total = 0;
    $scope.misProductos = [];

    var Producto = $resource('/productos/:id', {id: '@id'},
    {
        update: {method: 'put', isArray: false},
        delete: {method: 'delete', isArray: false}
    }
    );


    $scope.newProducto = new Producto();


    $scope.agregar = function()
    {
        $scope.newProducto.selected = false;
        $scope.newProducto.importe = $scope.newProducto.cantidad *
                $scope.newProducto.precio;

        $scope.newProducto.id
                ?
                $scope.newProducto.$update(function() {
                    $scope.newProducto = new Producto();
                    $scope.totalizar();
                })
                :
                $scope.newProducto.$save(function(data)
                {
                    $scope.misProductos.push($scope.newProducto);
                    $scope.newProducto = new Producto();
                    $scope.totalizar();

                });
    };



    $scope.update = function(p)
    {
        $scope.newProducto = p;
    };


    $scope.borrar = function(p, i)
    {
        p.$delete(function()
        {
            $scope.misProductos.splice(i, 1);
            $scope.totalizar();
        }
        );

    };

    $scope.totalizar = function()
    {
        $scope.total = 0;

        angular.forEach($scope.misProductos, function(producto)
        {
            $scope.total += producto.cantidad * producto.precio;
            producto.selected = (producto.cantidad === 0) ? true : false;
        });

    };


    Producto.query(function(data)
    {
        $scope.misProductos = data;
        console.log("Productos del server");
        console.log(data);
        $scope.totalizar();
    });

};



app.controller
        ('MyCtrl1',
                function($scope)
                {

                }
        );
app.controller
        ('cartCtrl', cartCtrl);
