import React from 'react'
import home from '../images/home.png'
import logo from '../images/logo.png'

function AdmVentas() {
    return (
        <div align="center">
        <div class="text-end">
        <img src={logo} width="60" alt=""></img>
        </div> 
        <header> <h3>Administrador de Ventas</h3>  </header>
        <br/>
        <div class="btn-group me-2" role="group">
        <button type="button" class="btn btn-secondary btn-lg">Crear</button></div>
        <div class="btn-group me-2" role="group">
        <button type="button" class="btn btn-secondary btn-lg">Editar</button></div>
        <div class="btn-group me-5" role="group">
        <button type="button" class="btn btn-secondary btn-lg">Eliminar</button></div>
        <div class="btn-group me-4" role="group">
        <input type="search" name="Buscar" id="Buscar" placeholder="Buscar" size="50"/></div>
        <label>"Usuario"</label> <br/> <br/> 
         
        <table class="table table-aqua table-striped">
        <thead align="middle">
            <th>Codigo de Venta</th>
            <th>Cliente</th>
            <th>Cantidad Artículos</th>
            <th>Costo Total</th>
            <th>Vendedor</th>
            <th>Destino</th>
            <th>Fecha Pedido</th>
            <th>Fecha Estimada de Entrega</th>

            </thead>
            <tbody>
           
            <tr align="middle">
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                
            </tr>
            <tr align="middle">
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
                <td>No aplica</td>
            </tr>
            </tbody>
        </table>
    
        <br/><br/>
        <div class="btn-group me-5" role="group">
        <button type="button" class="btn btn-secondary btn-lg">Reportes</button></div>
        <a href="/Principal"><img src={home} onClick="" alt="logo" height="50"/></a>
    
        </div>
    )
}

export default AdmVentas
