describe('Login Functionality', () => {
    it('should successfully log in with correct credentials', () => {
      cy.visit('/');
      cy.get('input[id="username"]').should('be.visible').type('secretary@soignemoi.fr');
      cy.get('input[id="password"]').should('be.visible').type('test');
      cy.get('button[type="submit"]').should('be.visible').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('should show error message on failed login', () => {
      cy.visit('/');
      cy.get('input[id="username"]').should('be.visible').type('wrong@example.com');
      cy.get('input[id="password"]').should('be.visible').type('wrongpassword');
      cy.get('button[type="submit"]').should('be.visible').click();
      cy.contains('Connexion failed').should('be.visible');
    });
  
    it('should redirect to /dashboard if csrf_token exists in sessionStorage', () => {
      // Simulez l'existence du token CSRF dans le stockage de session
      sessionStorage.setItem('csrf_token', 'mock-csrf-token');
      cy.visit('/'); // L'URL de la page de connexion doit être correcte
  
      cy.url().should('include', '/dashboard');  // Vérifiez que la redirection se fait correctement
    });
  });
  