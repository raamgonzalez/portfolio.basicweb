import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <section className="contact__section contact__title">
        <p className="contact__p--title">(ct)</p>
      </section>
      <section className="contact__section greeting">
        <div className="contact__greeting">
          <p className="contact__p p--margin">🙌 ¡Hola! Gracias por pasarte por mi portfolio.</p> 
          <p className="contact__p">
            Estoy super emocionado
            de compartir mi trabajo y mis habilidades contigo 🎨 . Si tienes
            alguna pregunta o simplemente quieres charlar sobre un proyecto
            futuro, ¡no dudes en enviarme un mensaje! 💬. Estoy siempre disponible
            para responder y conectarnos.
          </p>
        </div>
        <form className="contact__form form">
          <input className="form__input" type="text" placeholder="Name" />
          <input className="form__input" type="email" placeholder="Email" />
          <textarea className="form__area" placeholder="Message" />
          <div className="form__buttons">
            <button className="form__button" type="submit">Send message</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
