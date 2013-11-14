package controllers;

import models.Usuario;

public class Security extends Secure.Security {
    
    static boolean authenticate(String username, String password) {
        Usuario user = Usuario.find("byUsuario", username).first();
        return user != null && user.password.equals(password);
    }
}