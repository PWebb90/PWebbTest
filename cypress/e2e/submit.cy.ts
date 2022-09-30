/// <reference types="cypress" />
import RegistrationForm from '../support/PageObjects/registrationForm';
var helper = require('../helpers/helper')
const registrationForm =new RegistrationForm();

describe("Validate submit functionality of the example form", () => {

    // Block errors on the page from failing the test
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    before(function() {
        cy.fixture('validForm').then(function(data)
        {
            this.validForm=data ;
        })
    })

    beforeEach(() => {
        cy.openSite()
        cy.get('.practice-form-wrapper h5').should('have.text', "Student Registration Form")
    })

    it('Valid form can be submitted', function() {

        // Enter data
        helper.enterFormData(this.validForm)

        // Submit
        registrationForm.getSubmit().click()

        // Validate submission modal
        cy.get('#example-modal-sizes-title-lg').should('contain.text', "Thanks for submitting the form")
        cy.get('.modal-body').find('table').find('tbody').as("myTable")
        cy.get('@myTable').find('tr').eq(0).find('td').eq(1).should('contain.text', this.validForm.firstName + " " + this.validForm.lastName)
        cy.get('@myTable').find('tr').eq(1).find('td').eq(1).should('contain.text', this.validForm.email)
        cy.get('@myTable').find('tr').eq(2).find('td').eq(1).should('contain.text', this.validForm.gender)
        cy.get('@myTable').find('tr').eq(3).find('td').eq(1).should('contain.text', this.validForm.mobile)
        cy.get('@myTable').find('tr').eq(4).find('td').eq(1).should('contain.text', this.validForm.dob)
        cy.get('@myTable').find('tr').eq(5).find('td').eq(1).should('contain.text', this.validForm.subjects)
        cy.get('@myTable').find('tr').eq(6).find('td').eq(1).should('contain.text', this.validForm.hobbies)
        cy.get('@myTable').find('tr').eq(7).find('td').eq(1).should('contain.text', this.validForm.picture)
        cy.get('@myTable').find('tr').eq(8).find('td').eq(1).should('contain.text', this.validForm.address)
        cy.get('@myTable').find('tr').eq(9).find('td').eq(1).should('contain.text', this.validForm.state + " " + this.validForm.city)    
    })
})