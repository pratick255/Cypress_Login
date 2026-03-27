describe('Facebook Login - Invalid Credentials', () => {

  it('Should show error message for invalid login', () => {

    // Step 1: Visit Facebook login page
    cy.visit('https://www.facebook.com/')

    // Step 2: Enter email
    cy.get('#email').type('amd@gmail.com')

    // Step 3: Enter password
    cy.get('#pass').type('12345678')

    // Step 4: Click login button
    cy.get('button[name="login"]').click()

    // Step 5: Validate error message
    cy.contains("The email address you entered isn't connected to an account. Find your account and log in.")
      .should('be.visible')

  })

})