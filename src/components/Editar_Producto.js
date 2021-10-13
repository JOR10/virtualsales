import React from 'react'
import home from '../images/home.png'
import logo from '../images/logo.png'
//import React, { useState } from 'react'



const Editar_Producto = () => {

   // const [formValues, setFormValues] = useState({})

   /* const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    

    
        
        console.log('formValues', formValues);}*/
        const submit = (e) => {
            e.preventDefault();
fetch('http://localhost:5000/geT')
.then(response => response.json())
.then(data => console.log('response',data));

    }



    return (
        <div align="center">
            <div class="text-end">
                <label> "Usuario"</label>
                <a href="/Principal"><img src={logo} width="60" alt=""></img></a>
            </div>
            <h3>Editar Producto</h3>
            
            <br />

            <div class="col-2 container w-90 my-5">
                <form action="#">
                    <div align="Center">
                        <div class="mb-3">
                            <label for="codigo" class="form label">Código de Producto:</label>
                            <input type="codigo" class="form-control" name="codigo" placeholder="Código de Producto" disabled></input>
                        </div>
                        <div class="mb-3">
                            <label for="codigo" class="form label">Descripción:</label>
                            <input type="codigo" class="form-control" name="codigo" placeholder="Descripción"></input>
                        </div>

                        <div class="mb-3">
                            <label for="cantidad" class="form label">Cantidad Articulo:</label>
                            <input type="cantidad" class="form-control" name="cantidad" placeholder="Ingrese la cantidad"></input>
                        </div>
                        <div class="mb-3">
                            <label for="valor" class="form label">Valor Unitario:</label>
                            <input type="valor" class="form-control" name="valor" placeholder="Ingrese el valor"></input>
                        </div>
                        <div class="mb-3">
                            <label for="articulo" class="form label">Estado:</label>
                            <select class="form-select" aria-label="Default select example">
                                <option value="1">Estado 1</option>
                                <option value="2">Estado 2</option>
                                <option value="3">Estado 3</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>

            <div class="btn-group me-2" role="group">
                <a href="/GestordeVentas"><button type="button" class="btn btn-secondary btn-lg ">Guardar</button></a></div>
            <div class="btn-group me-2">
                <input type="reset" class="btn btn-secondary btn-lg" value="Limpiar"></input></div>
            <div class="btn-group me-2" role="group">
                <button type="submit" onClick={submit} class="btn btn-secondary btn-lg ">Cancelar</button></div>
            <a href="/AdmProductos"><img src={home} alt="logo" height="50" align="center" /></a>   


            <br /><br />

            <table border="2" class="table table-gray table-striped">
                <thead align="middle">
                    <th>Código de Producto</th>
                    <th>Descripción</th>
                    <th>Cantidad Articulo</th>
                    <th>Valor Unitario</th>
                    <th>Estado</th>

                </thead>
                <tbody>

                    <tr align="middle">
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
                    </tr>
                </tbody>


            </table>



        </div>
    )
}

export default Editar_Producto
