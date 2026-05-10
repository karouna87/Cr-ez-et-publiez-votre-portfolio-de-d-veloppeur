import "./Contact.css";

import emailjs from "@emailjs/browser";

import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_49urqqh",
      "template_yaovyem",
      form.current,
      "XTmxjCl1-kCLKNjCA"
    )

    .then(() => {
      alert("Message envoyé avec succès !");
    })

    .catch(() => {
      alert("Erreur lors de l'envoi.");
    });

    e.target.reset();
  };

  return (

    <main className="contact">

      <section className="contact-hero">
        <h1>Contact</h1>
        <p>
          Vous avez un projet, une opportunité ou une question ?
          N’hésitez pas à me contacter via ce formulaire.
        </p>
      </section>

      <section className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Votre nom"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows="8"
            required
          ></textarea>

          <button type="submit">
            Envoyer
          </button>
        </form>
      </section>

      <section className="social-section">
        <h2>Mes réseaux</h2>
        <div className="social-links">

          <a
            href="https://github.com/karouna87"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/arouna-kouotou-6ba4b1409/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;