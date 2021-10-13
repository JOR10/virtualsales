import React from 'react'
import home from "../images/home.png";
import logo from "../images/logo.png";

function Recuperar_contrasena() {
    return (
        <div>
            <div class="text-end">
                <img src={logo} width="70" alt=""></img>
            </div>
            <section>
		        <div class="color"/>
		        <div class="color"/>
		        <div class="color"/>
		        <div class="box">
			        <div class="container">
                        <div class="form">
                            <h2 align="center">He olvidado mi contraseña</h2>
                                <br/>
                                <center><p class="text"/><h4 >Si has perdido u olvidado tu contraseña y <br/>deseas recuperar su acceso, 
                                por favor escribe <br/>tu cédula y da clic en "Recuperar contraseña"
                                </h4></center><br/>
                                <div class="inputBox" align="center">
                                    <input type="text" placeholder="Ingresa tu Cédula"/>
                                </div><br/>
                                <div class="inputBox" align="center">
                                    <input type="submit"value="Recuperar contraseña"/>
                                </div><br/>
                            <center> Ya tienes una cuenta? <a href="/">
                            &nbsp;Iniciar sesión</a></center><br/>
                            <center><a href="/Principal"><img src={home} alt="home" height="50"/></a></center>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  

    )
}

export default Recuperar_contrasena
