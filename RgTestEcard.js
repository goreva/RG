/// <reference types="cypress" />

it("RG sent ecard test", function () {
    //log in
    cy.visit('https://example.rewardgateway.co.uk/Authentication/Start');
    cy.get('[data-automation="signin"]').click();
    cy.get('[data-automation="Username"]').type('robin.miklinski+autoqatest@rewardgateway.com');
    cy.get('[data-automation="Password"]').type('zKAUs>q@sOUH7{V8');
    cy.get('form').submit();
    //SmartHub page     
    cy.url().should('contains', 'https://example.rewardgateway.co.uk/SmartHub');
    cy.get('.icon-cross').click();
    cy.get(':nth-child(6) > a > .main-link-text')
    cy.get('.icon-cross').click();
    //Social Recognition Wall
    cy.visit('https://example.rewardgateway.co.uk/SocialRecognition');
    cy.get('.icon-cross').click();
    cy.get('.ui-autocomplete-input').type('automation recipient');
    cy.get('#ui-id-1 > li:first').click();
    cy.get('.action-buttons > .itcss-button').click();
    //Make someone happy
    cy.url().should('contains', 'https://example.rewardgateway.co.uk/SocialRecognition/makesomeoneHappy');
    cy.get('.icon-cross').click();
    cy.get('#category_13431 > span').click();
    cy.get('#category_11228 > span').click();
    cy.get('#category_11228_item_111386 .icon-ok').click();
    cy.get('#selected_text').click();
    cy.get('#selected_text').type('{backspace}');
    cy.get('#selected_text').type('{backspace}');
    cy.get('#selected_text').click();
    cy.get('#selected_text').type('Well done!');
    cy.get('#share_send').click();
    cy.url().should('contains', 'https://example.rewardgateway.co.uk/SocialRecognition/makesomeoneHappy/Complete');
    cy.get('.icon-cross').click();
    cy.url().should('contains', 'https://example.rewardgateway.co.uk/SocialRecognition');
})
