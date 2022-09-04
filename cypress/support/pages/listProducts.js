export class ListProducts {

    constructor(){
        this.aceptarAlerta = "#closeModal";
        this.goShoppingCart = "#goShoppingCart";
        this.nameShoppingCart = "#productName";
        this.priceShoppingCart = "#productPrice";
        this.showPrice = "//button[contains(text(),'Show total price')]";
        this.total= "#price"
        let valor
     
    }

    seleccionarprimerProducto(producto){
        cy.xpath(`//p[contains(text(), '${producto}')]`).should("be.visible");
        cy.xpath(`//p[contains(text(), '${producto}')]//following-sibling::button[contains(text(),'Add to cart')]`).click();
        
    }

    seleccionarsegundoProducto(){
        cy.xpath("//p[contains(text(), 'Black Jacket')]").should("be.visible")
        cy.xpath("//p[contains(text(), 'Black Jacket')]//following-sibling::button[contains(text(),'Add to cart')]").click();
    }

    clickgoShoppingCartButon(){
        cy.get(this.goShoppingCart).click()
    }

    cerrarModalbutton(){
        cy.get(this.aceptarAlerta).click()
    }

    VerTotalPrecios(){
        cy.xpath("//button[contains(text(),'Show total price')]").click()
    }

validarNombreProductomm(product1, precio){
    cy.get(`[name="${product1}"]`).invoke("text").then(text =>{
        expect(text).equal(product1);
    })
    cy.get(`[name="${precio}"]`).invoke("text").then(text =>{
        expect(text).is.equal(`$${precio}`)
    })

}
totalPrecios(valor1,valor2){
    let valor
    cy.get(this.total).invoke("text").then(text =>{
        valor=text
        assert.equal(text, valor);

        //expect(text).equal(text)
    })

    cy.get(`[name="${valor1}"]`).invoke("text").then(text =>{
        expect(text).is.equal(`$${valor1}`)
    })
    cy.get(`[name="${valor2}"]`).invoke("text").then(text =>{
        expect(text).is.equal(`$${valor2}`)
    })
    const totales= valor1+valor2
    cy.get(totales)
    cy.get(this.total).invoke("text").then(text =>{
    assert.equal(text, totales);
    })

}
}


