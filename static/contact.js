document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.getAttribute('data-copy-email');
    const status = button.parentElement.querySelector('.copy-status');

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const input = document.createElement('textarea');
        input.value = email;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        try {
          input.select();
          if (!document.execCommand('copy')) throw new Error('Copy failed');
        } finally {
          input.remove();
        }
      }
      status.textContent = 'Email copied';
    } catch {
      status.textContent = `Copy this address: ${email}`;
    }
  });
});

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector('[type="submit"]');
  const status = contactForm.querySelector('.form-status');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  status.textContent = '';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error('Submission failed');
    contactForm.reset();
    status.textContent = 'Message sent. Thank you — I’ll get back to you.';
  } catch {
    status.textContent = 'The message could not be sent. Please use the email options below.';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Send message ↗';
  }
});
