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
public class Producto extends Model {

    public String nombre;
    public Integer cantidad;
    public Boolean selected;
    public Double precio;
    public Double importe;

    public Producto() {
        this.nombre = "";
        this.cantidad = 0;
        this.selected = Boolean.FALSE;
        this.precio = 0.0;
        this.importe = 0.0;
    }

    public Producto(String nombre, Integer cantidad, Boolean selected, Double precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.selected = selected;
        this.precio = precio;
        this.importe = this.precio * this.cantidad;
    }
}
