/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import java.util.logging.Level;
import java.util.logging.Logger;
import models.Usuario;
import play.mvc.Controller;

/**
 *
 * @author luis-Imac
 */
public class Usuarios extends Controller {

    public static void blank() {
        render();
    }

    public static void create() {

        String nombre = params.get("usuario.nombre");
        String usuario = params.get("usuario.usuario");
        String password = params.get("usuario.password");
        String email = params.get("usuario.email");
        Usuario user = new Usuario(nombre, usuario, password, email);
        validation.valid(user);
        if (validation.hasErrors()) {
            params.flash();
            validation.keep();
            blank();
        }
        user.save();
        Application.index();
    }

}
