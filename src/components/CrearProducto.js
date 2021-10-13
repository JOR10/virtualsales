//import { response } from 'express';
//import React from 'react';
import logo from '../images/logo.png';

import React, { useState } from 'react'
//import { useHistory } from 'react-router'
//import React, {useEffect} from 'react';
/*    
fetch('localhost:5000/producto')
.then(response => response.json())
.then(data => console.log('response',data));*/



const CrearProducto = () => {

  /// const history = useHistory();
    const [formValues, setFormValues] = useState({})

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log('formValues', formValues);
 
        fetch('http://localhost:5000/producto', {
             method: 'POST', 
            body: JSON.stringify(formValues), 
            headers:{
            'Content-Type': 'application/json'
            }
         }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}




    return (
        
        <div align="center" class="container" className="productForm">
        <form>
        <div class="text-end">
        <img src={logo} width="60" alt=""></img>
        </div> 
        <header> <h4>Ingreso de Producto</h4>  </header>
        <br/><br/>
        <label >Código Producto   <input type="text"></input></label><br/><br/>
        <label >Descripción <input onChange={changeField} value={formValues.descripcion} name="descripcion" type="text" class="form-control"></input></label><br/><br/>
        <label >Cantidad Artículo<input onChange={changeField} value={formValues.cantidad} name="cantidad" type="number" class="form-control"></input></label><br/><br/>
        <label >Valor Unitario    <input onChange={changeField} value={formValues.valor} name="valor" type="number" class="form-control"></input></label><br/><br/>
        <label >Estado            <select onChange={changeField} value={formValues.estado} name="estado" type="text" class="form-control">
            <option>Disponible</option>
            <option>No Disponible</option> </select></label><br/><br/><br/><br/>
        <button type="submit" onClick={submit} class="btn btn-secondary btn-lg">Guardar</button>
         <button type="button" class="btn btn-secondary btn-lg">Limpiar</button>
         <button type="button" class="btn btn-secondary btn-lg">Cancelar</button>
         </form>
        </div>
    )
    
}

export default CrearProducto
