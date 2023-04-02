describe('Home page', () => {
    it('should have a title', () => {
        cy.title().should('include', 'Stephen McCullough - Software engineer and amateur hobbit.')
    })

    it('renders a link to the about page', () => {
        cy.contains('a', 'About').should('have.attr', 'href', '/about')
    })

    it('renders a link to the articles page', () => {
        cy.contains('a', 'Articles').should('have.attr', 'href', '/articles')
    })

    it('renders a link to the projects page', () => {
        cy.contains('a', 'Projects').should('have.attr', 'href', '/projects')
    })

    it('renders a link to the speaking page', () => {
        cy.contains('a', 'Speaking').should('have.attr', 'href', '/speaking')
    })

    it('renders a link to the uses page', () => {
        cy.contains('a', 'Uses').should('have.attr', 'href', '/uses')
    })

    it('renders the title blurb', () => {
        cy.contains('h1', 'Software engineer, aspiring gardener and amateur hobbit.')
    })

    it('renders the description blurb', () => {
        cy.contains('p', 'aspiring gardener')
    })
})