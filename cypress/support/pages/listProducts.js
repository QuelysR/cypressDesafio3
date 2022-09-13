export class ListProducts {

    constructor() {
        this.aceptarAlerta = "#closeModal";
        this.goShoppingCart = "#goShoppingCart";
    }

    seleccionarProducto(producto) {
        cy.xpath(`//p[contains(text(), '${producto}')]`).should("be.visible");
        cy.xpath(`//button[@value = '${producto}']`).click();
        cy.get(this.aceptarAlerta).click()
        
    }

    clickgoShoppingCartButon() {
        cy.get(this.goShoppingCart).click()
    }
}


