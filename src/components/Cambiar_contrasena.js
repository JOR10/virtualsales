import React from 'react'
import home from '../images/home.png'
import logo from "../images/logo.png";

function Cambiar_contrasena() {
    return (
      <div>
        <div class="text-end">
          <img src={logo} width="70" alt=""></img>
        </div>
        <h2 class="fw-bold text-center py-5">Cambiar Contraseña</h2>
        <div class="col-2 container w-90 my-5">
        <form action="#">
          <div align="Center">
            <div class="mb-3">
              <label for="email" class="form label">Correo Electrónico</label>
              <input type="email" class="form-control" name="email" placeholder="Ingresa tu e-mail registrado"></input>
            </div>
            <div class="mb-3">
              <label for="password" class="form label">Nueva Contraseña</label>
              <input type="password" class="form-control" name="password" placeholder="Ingresa tu nueva contraseña"></input>
            </div>
            <div class="mb-3">
              <label for="password" class="form label">Confirma la Contraseña</label>
              <input type="password" class="form-control" name="password" placeholder="Confirme la contraseña"></input>
            </div>
          </div>
        </form>
          </div>
          <div align="center">
            <div class="btn-group me-2" role="group">
              <button type="button" class="btn btn-secondary btn-lg">Aceptar</button>
            </div>
            <div class="btn-group me-2" role="group">
              <button type="button" class="btn btn-secondary btn-lg">Limpiar</button>
            </div>   
            <a href="/Principal"><img src={home} alt="home" height="50"/></a>
          </div>
      </div>
    );
}

export default Cambiar_contrasena
