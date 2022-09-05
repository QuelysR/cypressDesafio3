export class CartShoppingPage {

    constructor() {
        this.total = "#price"
    }

    VerTotalPrecios() {
        cy.xpath("//button[contains(text(),'Show total price')]").click()
    }

    validarNombreProduct(product) {
        cy.get(`[name="${product}"]`).invoke("text").then(text => {
            expect(text).equal(product);
        })
    }

    validarprecioProduct(precio, product) {
        cy.get(`[name="${product}"]`).siblings("#productPrice").invoke("text").then(text => {
            expect(text).is.equal(`$${precio}`)
        })
    }

    totalPrecios(precio) {
        cy.get(this.total).invoke("text").then(valor => {
            expect(valor).to.equal(precio);

        })

    }
}