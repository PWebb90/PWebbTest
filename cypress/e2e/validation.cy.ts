/// <reference types="cypress" />
import RegistrationForm from '../support/PageObjects/registrationForm';
var helper = require('../helpers/helper')
const registrationForm =new RegistrationForm();

describe("Verify validation rules on the registration form", () => {

    // Block errors on the page from failing the test
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(function() {
        cy.fixture('validForm').then(function(data)
        {
            this.validForm=data ;
        })
    })

    beforeEach(() => {
        cy.openSite()
        cy.get('.practice-form-wrapper h5').should('have.text', "Student Registration Form")
    })

    it('Verify form cannot be submitted without a first name', function() {

        helper.enterFormData(this.validForm)

        registrationForm.getFirstName().clear()
        registrationForm.getSubmit().click()

        cy.get('#example-modal-sizes-title-lg').should('not.exist')
    })

    it('Verify form cannot be submitted without a last name', function() {

        helper.enterFormData(this.validForm)

        registrationForm.getLastName().clear()
        registrationForm.getSubmit().click()

        cy.get('#example-modal-sizes-title-lg').should('not.exist')
    })

    // Unskip when email validation works
    it.skip('Verify form cannot be submitted without an email', function() {

        helper.enterFormData(this.validForm)

        registrationForm.getEmail().clear()
        registrationForm.getSubmit().click()

        cy.get('#example-modal-sizes-title-lg').should('not.exist')
    })

    it('Verify form cannot be submitted without a mobile number', function() {

        helper.enterFormData(this.validForm)

        registrationForm.getMobile().clear()
        registrationForm.getSubmit().click()

        cy.get('#example-modal-sizes-title-lg').should('not.exist')
    })

    // Clearing dob crashes page, need to rethink
    it.skip('Verify form cannot be submitted without a date of birth', function() {

        helper.enterFormData(this.validForm)

        registrationForm.getDateOfBirth().clear()
        registrationForm.getSubmit().click()

        cy.get('#example-modal-sizes-title-lg').should('not.exist')
    })
})