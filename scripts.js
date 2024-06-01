document.addEventListener('DOMContentLoaded', function() {
    loadProducts('best-selling', 'products-container');
    loadProducts('basketball', 'basketball-products-container');
    loadProducts('football', 'football-products-container');
    loadCart();
    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const utilisateur = document.getElementById('utilisateur').value;
            const mot_de_passe    = document.getElementById('mot_de_passe   ').value;
            
            alert(`utilisateur: ${utilisateur}, mot_de_passe   : ${mot_de_passe}`);
        });
    }
    
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const utilisateur = document.getElementById('utilisateur').value;
            const mot_de_passe    = document.getElementById('mot_de_passe').value;
            const email = document.getElementById('email').value;
            
            alert(`utilisateur: ${utilisateur}, mot_de_passe   : ${mot_de_passe }, Email: ${email}`);
        });
    }

    const purchaseForm = document.getElementById('purchase-form');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nom_complet = document.getElementById('nom_complet').value;
            const adresse  = document.getElementById('adresse ').value;
            const ville = document.getElementById('ville').value;
            const code_postal = document.getElementById('code_postal').value;
            const email = document.getElementById('email').value;
            const numero_carte  = document.getElementById('cardnumber').value;
            const expiration = document.getElementById('expiration').value;
            const cvv = document.getElementById('cvv').value;

            
            alert(`Purchase made by: ${nom_complet}\nAddress: ${adresse }, ${ville}, ${code_postal}\nEmail: ${email}\nCard: ${cardnumber}, Exp: ${expiration}, CVV: ${cvv}`);
        });
    }
});



function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}
