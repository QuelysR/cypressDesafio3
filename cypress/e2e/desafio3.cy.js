/// <reference types="cypress" />

import { RegistroPage } from "../support/pages/registroPage"
import { LoginPage } from "../support/pages/loginPage"
import { HomePage } from "../support/pages/homePage"
import { Navbar } from "../support/pages/navbar"
import { ListProducts } from "../support/pages/listProducts"
import { CartShoppingPage } from "../support/pages/cartShoppingPage"


describe('Tercer Desafio', () => {
    let datosLogin, datosProductos
    const registroPage = new RegistroPage();
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const navbar = new Navbar();
    const listProducts = new ListProducts();
    const cartShoppingPage = new CartShoppingPage();


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
        listProducts.seleccionarProducto(datosProductos.primerProducto)
        listProducts.seleccionarProducto(datosProductos.segundoProducto)
        listProducts.clickgoShoppingCartButon()
        cartShoppingPage.validarNombreProduct(datosProductos.primerProducto)
        cartShoppingPage.validarNombreProduct(datosProductos.segundoProducto)
        cartShoppingPage.validarprecioProduct(datosProductos.primeroprecioProducto, datosProductos.primerProducto)
        cartShoppingPage.validarprecioProduct(datosProductos.segundoprecioProducto, datosProductos.segundoProducto)
        cartShoppingPage.VerTotalPrecios()
        cartShoppingPage.totalPrecios(`${datosProductos.primeroprecioProducto + datosProductos.segundoprecioProducto}`)
    })
})