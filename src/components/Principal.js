import React from 'react'

function Principal() {
    return (
        <div align="center">
            <h2>Menu</h2>
            <a href="/GestordeVentas"><button type="button" class="btn btn-secondary btn-lg">Gestor de Ventas</button></a><br/><br/>
            <a href="/AdministradordeVentas"><button type="button" class="btn btn-secondary btn-lg">Administrador de Ventas</button></a><br/><br/>
            <a href="/CambiodeContraseña"><button type="button" class="btn btn-secondary btn-lg">Cambio de Contraseña</button></a>

         
        </div>
    )
}

export default Principal
