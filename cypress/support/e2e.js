// cypress/support/e2e.js

// Exemples de commandes personnalisées ou configurations globales
// Ajouter une commande personnalisée
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[id="username"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  // Exemple de configuration globale
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ceci permet d'ignorer certaines exceptions que vous pouvez rencontrer
    return false;
  });
  