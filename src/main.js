const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const spanEmail = document.getElementById('email-span');
const formCard = document.getElementById('form-card');
const successCard = document.getElementById('success-card');
const dismiss = document.getElementById('dismiss');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    // Simple email regex — not RFC-compliant but hopefully sufficient for this challenge
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (emailInput.value === '' || !isValid) {
        errorMsg.classList.remove('hidden');
        errorMsg.setAttribute('aria-live', 'polite');
        emailInput.classList.add('border-primary', 'text-primary');
    } else {
        errorMsg.classList.add('hidden');
        errorMsg.setAttribute('aria-live', 'off');
        emailInput.value = '';
        spanEmail.textContent = email;
        formCard.classList.add('hidden');
        successCard.classList.remove('hidden');
        successCard.setAttribute('aria-hidden', 'false');
        formCard.setAttribute('aria-hidden', 'true');
        successCard.focus();
    }
});

dismiss.addEventListener('click', () => {
    successCard.classList.add('hidden');
    formCard.classList.remove('hidden');
    successCard.setAttribute('aria-hidden', 'true');
    formCard.setAttribute('aria-hidden', 'false');
    formCard.focus();
});

emailInput.addEventListener('focus', () => {
    errorMsg.classList.add('hidden');
    emailInput.classList.remove('border-primary', 'text-primary');
});