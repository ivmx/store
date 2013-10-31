/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package controllers;

import models.Producto;
import java.util.List;
import play.mvc.Controller;

/**
 *
 * @author Henry
 */
public class Productos extends Controller{
    
    public static void index(){
        
        List<Producto> productos = Producto.findAll();
        
        renderJSON(productos);
        
    }
    
}
