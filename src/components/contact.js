import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section style={styles.contact}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Me</h1>
        <p style={styles.description}>
          If you have any questions, opportunities, or just want to say hello, feel free to reach out to me using the form below or through my social media.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>

        <div style={styles.alternativeContact}>
          <p>Connect with me on social media:</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contact: {
    padding: '60px 20px',
    backgroundColor: '#C6E3FF',
    fontFamily: 'Verdana',
    color: '#333',
    textAlign: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '20px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
    resize: 'vertical',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '18px',
    color: 'white',
    backgroundColor: '#282c34',
    textDecoration: 'none',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#3c4047',
  },
  alternativeContact: {
    marginTop: '40px',
  },
  contactLink: {
    color: '#282c34',
    textDecoration: 'none',
    fontSize: '18px',
  },
  socialLink: {
    color: '#282c34',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Contact;
