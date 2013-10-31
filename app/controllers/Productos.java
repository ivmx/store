/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import com.google.gson.Gson;
import models.Producto;
import java.util.List;
import play.mvc.Controller;

/**
 *
 * @author Henry
 */
public class Productos extends Controller {

    public static void productos() {

        List<Producto> productos = Producto.findAll();
        renderJSON(productos);

    }

    public static void deleteProducto(Long id) {

        Producto p = Producto.findById(id);

        if (p != null) {
            p.delete();
            renderJSON(id);
        } else {
            id *= -1;
        }

        renderJSON(id);
    }

    public static void saveProducto() {

        Gson g = new Gson();
        Producto newProducto = g.fromJson(params.get("body"), Producto.class);
        newProducto.save();
        renderJSON(newProducto);

    }

    public static void updateProducto(Long id) {

        Gson g = new Gson();

        Producto newProducto = g.fromJson(params.get("body"), Producto.class);
        Producto dbProducto = Producto.findById(id);

        dbProducto.nombre = newProducto.nombre;
        dbProducto.precio = newProducto.precio;
        dbProducto.cantidad = newProducto.cantidad;
        dbProducto.selected = newProducto.selected;
        dbProducto.importe = newProducto.importe;

        dbProducto.save();
        renderJSON(dbProducto);

    }
}
