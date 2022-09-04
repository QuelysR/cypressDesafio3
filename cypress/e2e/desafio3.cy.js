/// <reference types="cypress" />

import { RegistroPage } from "../support/pages/registroPage"
import { LoginPage } from "../support/pages/loginPage"
import { HomePage } from "../support/pages/homePage"
import {Navbar} from "../support/pages/navbar"
import {ListProducts} from "../support/pages/listProducts"

describe('Tercer Desafio', () => {
    let datosLogin, datosProductos
    const registroPage = new RegistroPage();
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const navbar = new Navbar();
    const listProducts = new ListProducts();

    before("Before", () => {
        cy.fixture("loginData").then(datos => {
            datosLogin = datos;
        })
        cy.fixture("productos").then(datos => {
            datosProductos = datos;
        })
    })
    beforeEach("Before each", () => {
        cy.visit("/")
        registroPage.clickIniciarSesionButton();
        loginPage.login(datosLogin.usuario, datosLogin.contraseña);
        navbar.verificarUsuario(datosLogin.usuario)
        homePage.clickOnlineShopLink();
    })

    it("Realizar una Compra", () => {
        navbar.verificarUsuario(datosLogin.usuario)
        listProducts.seleccionarprimerProducto(datosProductos.primerProducto)
        listProducts.cerrarModalbutton() 
        listProducts.seleccionarsegundoProducto()
        listProducts.cerrarModalbutton()
        listProducts.clickgoShoppingCartButon()
        listProducts.validarNombreProductomm(datosProductos.primerProducto,datosProductos.primeroprecioProducto)
        listProducts.validarNombreProductomm(datosProductos.segundoProducto,datosProductos.segundoprecioProducto)
        listProducts.VerTotalPrecios()
        listProducts.totalPrecios(datosProductos.primeroprecioProducto, datosProductos.segundoprecioProducto)

    })
})