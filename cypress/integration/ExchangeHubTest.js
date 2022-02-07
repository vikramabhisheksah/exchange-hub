describe("Renders the Home Page",()=>{
    it("renders correctly",()=>{
        cy.visit("/")
        cy.get(".content").should("exist")
    });

    it("search bar is working",()=>{
        cy.visit("/")
        cy.get("#exchange-search").should("exist")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#exchange-search').clear();
        cy.get('#exchange-search').type('FTX');
        cy.get('.exchange-row').contains('FTX')
        /* ==== End Cypress Studio ==== */
    });

    it("Opens the exchange details page",()=>{
        cy.visit("/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#exchange-search').clear();
        cy.get('#exchange-search').type('Binance');
        cy.get('.exchange').click();
        cy.get('.trust-score-rank').should("exist");
        cy.get('.trade-vol').should("exist");
        cy.get('.trust-score').should("exist");
        cy.get('.trust-score-rank').should("exist");
        cy.get('.exchange-country').should("exist");
        cy.get('.exchange-year').should("exist");
        cy.get('h1 > a').click();
        cy.url().should('include', 'binance.com')
        /* ==== End Cypress Studio ==== */
    });

    it("Redirects back to the homepage from the exchange details page",()=>{
        cy.visit("/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/exchange/binance"] > .exchange-container > .exchange-row > .exchange > div > h1').click();
        cy.get('.button-back').click();
        /* ==== End Cypress Studio ==== */
        cy.url().should('eq', 'http://localhost:3000/');
        
    });


})
