/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package models;

import javax.persistence.Entity;
import play.db.jpa.Model;

/**
 *
 * @author Henry
 */
@Entity
public class Producto extends Model{
    
    public String nombre;
    public Integer cantidad;
    public Double precio;
    public Double importe;
    public Boolean selected;

    public Producto(String nombre, Integer cantidad, Double precio, Double importe, Boolean selected) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.importe = importe;
        this.selected = selected;
    }
    
    
    
    
}
