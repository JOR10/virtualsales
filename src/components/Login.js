import React from 'react'
import facebook from '../images/facebook.svg'
import google from '../images/google.png'
import logo from '../images/logo.png'

function Login() {
    return (
        <div class="container w-75 bg-primary mt-5 rounded shadow">
        <div class="row align-items-stretch">
            <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">

            </div>
            <div class="col bg-white p-5 rounded-end">
                <div class="text-end">
                    <img src={logo} width="48" alt=""></img>
                </div>
                <h2 class="fw-bold text-center py-5">Bienvenido</h2>

                {/* inicio login */}

                <form action="#">
                    <div class="mb-4">
                        <label for="email" class="form label">Correo Electrónico</label>
                        <input type="email" class="form-control" name="email" placeholder="Ingresa tu Email"></input>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form label">Contraseña</label>
                        <input type="password" class="form-control" name="password" placeholder="Ingresa tu contraseña"></input>
                    </div>
                    <div class="mb-4">
                        <input type="checkbox" name="connected" class="form-checkbox-input" id=""></input>
                        <label for="connected" class="form-checkbox-label">Mantenerme Conectado</label>
                    </div>
                    <div class="d-grid">
                    <a href="/Principal"><button type="button"class="btn btn-primary">Iniciar Sesión</button></a>
                    </div>
                    <div class="my-3">
                        <span>No tienes cuenta? <a href="/">Regístrate</a></span><br/>
                        <span><a href="/RecuperarContraseña">Recupera tu Contraseña</a></span>
                    </div>
                </form>

                {/*  Login con Redes */}

                <div class="container w-100 my-5">
                    <div class="row text-center">
                        <div class="col-12">Inicia sesión con</div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-outline-primary w-100 my-1">
                                <div class="row align-items-center">
                                    <div class="col-2 d-none d-md-block">
                                        <img src={facebook} width="32" alt=""></img>
                                    </div>
                                    <div class="col-12 col-md-10 text-center">
                                        Facebook
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-danger w-100 my-1">
                                <div class="row align-items-center">
                                    <div class="col-2 d-none d-md-block">
                                        <img src={google} width="32" alt=""></img>
                                    </div>
                                    <div class="col-12 col-md-10 text-center">
                                        Google
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
