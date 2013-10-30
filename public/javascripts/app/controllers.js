'use strict';

/* Controllers */

var Ctrl2 = function($scope, $http, testService)
{
      $scope.total = 0;
      $scope.iva = 0;
      $scope.granTotal = 0;
      $scope.flete = 0;
      $scope.promo = "";
      $scope.leyenda = "";

      $scope.productos = [];

      $http.get('productos.json').success(function(data){


          $scope.productos = data;  
          console.log(data);

          }
      );

     $scope.totalizar = function() 
      {
        $scope.total = 0;
        var numProd = 0;

        angular.forEach($scope.productos, function(producto) 
        {
          $scope.total += producto.importe = producto.cantidad * producto.precio;

          numProd = numProd + producto.cantidad;
          producto.cantidad == 0 ? producto.selected = true: producto.selected = false;

        });

    
          if(numProd < 11  && numProd > 0 ){
            $scope.flete = 100;
          }else if (numProd < 21  && numProd > 0 ){
            $scope.flete = 200;
          }else if (numProd < 31  && numProd > 0 ){
            $scope.flete = 300;
          }else if (numProd > 0 ){
            $scope.flete = 400;
          }else{
            $scope.flete = 0;
          }

          if(numProd<3){
            $scope.leyenda = "Debe seleccionar mas de 3 productos";
          }else{
            $scope.leyenda = "";
          }

          if(numProd > 15 ){
            var des = ($scope.total * 0.05);
            $scope.total = $scope.total - ($scope.total * 0.05);
            $scope.promo = "Descuento en esta compra del 5%";
          }else{
            $scope.promo = "";
          }
          

          $scope.iva = $scope.total * 0.16;
          $scope.granTotal = $scope.iva + $scope.total + $scope.flete;

          testService.setTotal($scope.granTotal);

        };

        $scope.update = function() {
          var oldproductos = $scope.productos;
          $scope.productos = [];
          angular.forEach(oldproductos, function(producto) {
            if (!producto.selected) $scope.productos.push(producto);
          });

          $scope.totalizar();
        };

        $scope.totalizar();


        $scope.add = function()
        {
          $scope.prod.selected = false;
          $scope.prod.importe = $scope.prod.cantidad * $scope.prod.precio;
          $scope.productos.push($scope.prod);
          $scope.prod = new Object();
          $scope.prod.importe = 0;
          $scope.prod.cantidad = 0;
          $scope.prod.precio = 0;
          $scope.totalizar();
        }
        
}

angular.module('myApp.controllers', [])
  .controller
  ('MyCtrl1',
    function($scope) 
    {

    }
  )
  .controller
  ('MyCtrl2', Ctrl2);

