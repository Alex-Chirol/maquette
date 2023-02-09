const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const textarea = document.getElementById("textarea");

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: textarea.value,
    }

    const errors = {
        firstName: false,
        lastName: false,
        adress: false,
        email: false,
        phone: false,
        textarea: false,
    }

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError')
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const textareaError = document.getElementById('textareaError');

    firstNameError.style.opacity = '0';
    lastNameError.style.opacity = '0';
    emailError.style.opacity = '0';
    phoneError.style.opacity = '0';
    textareaError.style.opacity = '0';

    if (!formData.firstName) {
        errors.firstName = true;
        firstNameError.style.opacity = '1';
    }
    if (!formData.lastName) {
        errors.lastName = true;
        lastNameError.style.opacity = '1';
    }
    if (!formData.email) {
        errors.email = true;
        emailError.style.opacity = '1';
    }
    if (!formData.phone) {
        errors.phone = true;
        phoneError.style.opacity = '1';
    }
    if (!formData.message) {
        errors.message = true;
        textareaError.style.opacity = '1';
    }

    const modal = document.getElementById('modal');

    modal.style.display = 'none';

    if (!Object.values(errors).includes(true)) {
        console.log(formData)

        axios.post('http://212.83.176.255:3030/contact', 
        formData)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        
        modal.style.display = 'flex';
        contactForm.reset();
    }


})

const modalBtn = document.getElementById("modalBtn");

modalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})
