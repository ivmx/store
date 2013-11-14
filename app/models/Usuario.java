package models;

import javax.persistence.Entity;
import play.data.validation.Email;
import play.data.validation.Password;
import play.data.validation.Required;
import play.data.validation.Unique;
import play.db.jpa.Model;


@Entity
public class Usuario extends Model{
    @Required
    public String nombre;
    @Unique
    @Required
    public String usuario;
    @Password
    @Required
    public String password;
    @Email
    @Required
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
