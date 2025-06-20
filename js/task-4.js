const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userObj = {
        [form.elements.email.name]: email.trim(),
        [form.elements.password.name]: password.trim()
    }

    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }

    console.log(userObj);

    form.reset();
})