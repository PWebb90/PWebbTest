import RegistrationForm from '../support/PageObjects/registrationForm';
const registrationForm =new RegistrationForm();

function enterFormData(data) {

    registrationForm.getFirstName().type(data.firstName)
    registrationForm.getLastName().type(data.lastName)
    registrationForm.getEmail().type(data.email)
    registrationForm.getGenderMale().click({force: true})
    registrationForm.getMobile().type(data.mobile)

    registrationForm.getDateOfBirth().click()
    cy.get('div[aria-label="Choose Saturday, September 10th, 2022"]').click()

    registrationForm.getSubjects().type(data.subjects)
    cy.get('.subjects-auto-complete__option').contains(data.subjects).click()

    registrationForm.getHobbiesSports().click({force: true})
    registrationForm.getPicture().selectFile('cypress/fixtures/chick.jpg')
    registrationForm.getAddress().type(data.address)

    registrationForm.getState().click({force: true})
    cy.get('#react-select-3-option-2').click()
    //cy.get('.css-1n7v3ny-option').contains(data.state).click()

    registrationForm.getCity().click({force: true})
    cy.get('#react-select-4-option-0').click()        
    //cy.get('.css-9gakcf-option').contains(data.city).click()
}

export {enterFormData}