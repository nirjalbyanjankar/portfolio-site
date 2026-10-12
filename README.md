https://www.nirjalbyanjankar.com.np/

## Contact form maintenance

The contact form sends through the Brevo-backed EmailJS service `service_5cu7zbe` and template `template_dr8thpf`.

Brevo SMTP credentials are stored in EmailJS, never in the frontend. Gmail remains the recipient and is no longer used to authenticate sending.

1. In EmailJS template `template_dr8thpf`, use an authenticated Brevo sender as the From Email and `nirjalbyanjankar@gmail.com` as the To Email.
2. For SMTP authentication errors, open `service_5cu7zbe` in [EmailJS Email Services](https://dashboard.emailjs.com/admin) and check the SMTP login and key against Brevo's SMTP settings.
3. Send a test from the EmailJS dashboard and verify receipt, then test the website form.
4. Send a successful test monthly if the form has little traffic. Brevo can deactivate SMTP keys after 90 days without a successful send, even with no expiration selected. See [Brevo SMTP key maintenance](https://help.brevo.com/hc/en-us/articles/7959631848850-Create-and-manage-your-SMTP-keys).

Failed submissions keep the entered message and offer a direct-email link that opens the visitor's email app with the name and message filled in. The visitor still needs to send that email.

EmailJS documentation: [Connecting email services](https://www.emailjs.com/docs/user-guide/connecting-email-services/).
