class RegistrationForm {

    getFirstName() {
        return cy.get('#firstName')
    }

    getLastName() {
        return cy.get('#lastName')
    }

    getEmail() {
        return cy.get('#userEmail')
    }

    getGenderMale() {
        return cy.get('#gender-radio-1')
    }

    getGenderFemale() {
        return cy.get('#gender-radio-2')
    }

    getGenderOther() {
        return cy.get('#gender-radio-3')
    }

    getMobile() {
        return cy.get('#userNumber')
    }

    getDateOfBirth() {
        return cy.get('#dateOfBirthInput')
    }

    getSubjects() {
        return cy.get('#subjectsInput')
    }

    getHobbiesSports() {
        return cy.get('#hobbies-checkbox-1')
    }

    getHobbiesReading() {
        return cy.get('#hobbies-checkbox-2')
    }

    getHobbiesMusic() {
        return cy.get('#hobbies-checkbox-3')
    }

    getPicture() {
        return cy.get('#uploadPicture')
    }

    getAddress() {
        return cy.get('#currentAddress')
    }

    getState() {
        return cy.get('#react-select-3-input')
    }

    getCity() {
        return cy.get('#react-select-4-input')
    }

    getSubmit() {
        return cy.get('#submit')
    }
}

export default RegistrationForm