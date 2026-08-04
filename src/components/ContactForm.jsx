import { useState } from 'react';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <label>
        <span>Project type</span>
        <input type="text" name="projectType" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows="6" required />
      </label>
      <button type="submit">Send inquiry</button>
      {submitted ? <p className="contact-form__success">Thank you. Your inquiry has been received and I will be in touch shortly.</p> : null}
    </form>
  );
}

export default ContactForm;
