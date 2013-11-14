package models;

import javax.persistence.Entity;
import play.db.jpa.Model;


@Entity
public class Usuario extends Model{
    public String nombre;
    public String usuario;
    public String password;
    public String email;

    public Usuario() {
    }

    public Usuario(String nombre, String usuario, String password, String email) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
        this.email = email;
    }
    
    
    
}
