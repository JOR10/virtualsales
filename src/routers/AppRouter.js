import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AdmVentas from '../components/AdmVentas'
import Cambiarcontrasena from '../components/Cambiar_contrasena'
import CrearProducto from '../components/CrearProducto'
import GestorVentas from '../components/GestorVentas'
import HistorialVentas from '../components/HistorialVentas'
import Login from '../components/Login'
import Principal from '../components/Principal'
import Recuperarcontrasena from '../components/Recuperar_contrasena'

export default function AppRouter() {
    return (
        <Router>
            <Switch>
            <Route path="/GestordeVentas">
                <GestorVentas/>
            </Route>
            <Route path="/AdministradordeVentas">
               <AdmVentas/>
            </Route>
            <Route path="/Principal">
               <Principal/>
            </Route>
            <Route path="/CambiodeContraseña">
               <Cambiarcontrasena/>
            </Route>
            <Route path="/RecuperarContraseña">
               <Recuperarcontrasena/>
            </Route>
            <Route path="/HistorialVentas">
               <HistorialVentas/>
            </Route>
            <Route path="/CrearProducto">
               <CrearProducto/>
            </Route>
            <Route path="/">
                <Login/>
            </Route>

            </Switch>

        </Router>
        )
}

