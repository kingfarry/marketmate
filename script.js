const form = document.getElementById('sign-up form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').Value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Adding validation logic here
    alert(`Thank you for signing up, ${name}!`);

    
});