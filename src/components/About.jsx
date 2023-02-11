import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const About = () => {

  const { about } = useContext(GlobalContext);

  console.log(about)

  return (
    <section className="about">
      <section className="about__section about__title">
	  	  <p className="about__p--title">(ab)</p>
      </section>
      <section className="about__section resume">
        <p className="about__p">
          {about.resume}
        </p>
        <h3 className="about__h3">resume</h3>
      </section>
      <section className="about__section soft">
        <p className="about__p">{about.soft}</p>
        <h3 className="about__h3">soft</h3>
      </section>
      <section className="about__section hobbies">
        <p className="about__p">{about.hobbies.map((hobbie) => hobbie )}</p>
        <h3 className="about__h3">hobbies</h3>
      </section>
      <section className="about__section social">
        <p className="about__p">{about.rrss.map((social) => social.src)}</p>
        <h3 className="about__h3">social</h3>
      </section>
      <section className="about__section study">
        <p className="about__p">{about.study.map((i) => i.src)}</p>
        <h3 className="about__h3">study</h3>
      </section>
    </section>
  );
}

//------------Ver si lo puedo incorporar------------

/*Mi formación como arquitecto me ha brindado
una sólida comprensión de la estructura y la planificación, mientras
que mi interés por el diseño web me ha permitido explorar mi
creatividad y aprender sobre las últimas tecnologías.*/

export default About