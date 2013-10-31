'use strict';

/* Controllers */

var Ctrl2 = function($scope){
  $scope.total = 0;
  $scope.productos = [];

  var Producto = $resource('/productos/:id', {id:'@id'},
                           {
                             update: { method : 'put', isArray : false},
                             delete: { method : 'delete', isArray : false } 
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
                          $scope.newProducto.$update(function(){
                                                             
                          })
                      :                     
                      $scope.newProducto.$save(function(data)
                      {
                          $scope.productos.push($scope.newProducto);
                          
                      });

                      $scope.totalizar();
                      $scope.newProducto = Producto();  
                   }

  $scope.update = function(p)
                {
                  $scope.newProducto = p;
                }


  $scope.borrar = function(p,i)
                {
                  p.$delete(function()
                            {
                              $scope.productos.splice(i,1);
                              $scope.totalizar();
                            }
                           );
                }


  $scope.totalizar = function()
                      {
                          $scope.total = 0;

                          angular.forEach($scope.productos, function(producto) 
                          {
                              $scope.total += producto.cantidad * producto.precio;
                              producto.selected = (producto.cantidad == 0) ? true : false;
                          });
                      }


  Producto.query(function(data)
                {
                  $scope.productos = data;
                  console.log("Productos del server");
                  console.log(data);
                  $scope.totalizar();
                });
}



angular.module('myApp.controllers', ['ngResource'])
  .controller
  ('MyCtrl1',
    function($scope) 
    {

    }
  )
  .controller
  ('MyCtrl2', Ctrl2);

