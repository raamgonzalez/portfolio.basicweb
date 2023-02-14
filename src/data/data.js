import { v4 as uuidv4} from 'uuid';


export const data = {

  about: {
    resume: "Hola!, mi nombre es Ramsés pero algunos me dicen raam. Soy un Arquitecto apasionado por el diseño web y el front-end, combinando mis habilidades técnicas y creativas para crear experiencias en línea atractivas y funcionales.",
    soft: ["Comunicación efectiva colaboré en coordinación de proyectos", "Trabajo en equipo trabaje en equipos de diseño y proyecto de espacio publico", "Resolución de problemas participe en mesas participativas en los barrios", "Adaptabilidad", "Pasión por el aprendizaje"],
    hobbies: ["Futbol", "Jugar videojuegos", "Tocar la guitarra"],
    rrss: [
      { id: uuidv4(), title: "instagram", src: "../media/rrssicons/logo_instagram.svg", href: "#"},
      { id: uuidv4(), title: "facebook", src: "./media/rrssicons/logo_facebook.svg", href: "#"},
      { id: uuidv4(), title: "github", src: "./media/rrssicons/logo_github.svg", href: "#"},
      { id: uuidv4(), title: "behance", src: "./media/rrssicons/logo_behance.svg", href: "#"},
      { id: uuidv4(), title: "linkedin", src: "./media/rrssicons/logo_linkedin.svg", href: "#"},
    ],
    study: [
      { id: uuidv4(), title: "reactjs", src : "./media/softicons/logo_react.svg"},
      { id: uuidv4(), title: "jquery", src : "./media/softicons/logo_jquery.svg"},
      { id: uuidv4(), title: "astro", src : "./media/softicons/logo_astro.svg"},
      { id: uuidv4(), title: "jest", src : "./media/softicons/logo_jest.svg"},
    ]
   },
  
  projects: [
    {
      id: uuidv4(),
      name: "tienda de tecnología",
      description:
        "Tienda de venta de productos tecnologicos, aproveche para incorporar mock async",        
      soft: [ "html", "css", "javascript", "reactjs", "firebase" , "axios" ,  "sass"],
      media: "./media/projects/project_tecnophil.png",
    },
    {
      id: uuidv4(),
      name: "website portfolio",
      description: "Web realizada con el fin de mostrar mis trabajos y desarrollo como programador",
      soft: [ "html", "css", "javascript", "reactjs", "sass"],
      media: "./media/projects/test.jpg",
    },
    {
      id: uuidv4(),
      name: "blog arquitectura",
      description: "Blog de Arquitectura que contiene una consola de admin y cards con obras de arquitectura y arquitectos.",
      soft: [ "html", "css", "python", "django"],
      media: "./media/projects/test.jpg",
    },
    {
      id: uuidv4(),
      name: "landing-page lamparas",
      description: "Pagina web realizada para curso de programación fullstack python.",
      soft: [ "html", "css"],
      media: "./media/projects/project_regulux.png",
    },
    {
      id: uuidv4(),
      name: "tienda de camiseta",
      description: "Web para tienda de camisetas de futbol realizada en javascript vanilla",
      soft: [ "html", "css", "javascript"],
      media: "./media/projects/project_camisetasdprimera.png",
    },
    {
      id: uuidv4(),
      name: "tienda de camiseta",
      description: "Web para tienda de camisetas de futbol realizada en javascript vanilla",
      soft: [ "html", "css", "javascript"],
      media: "./media/projects/test.jpg",
    },
  ],

  softwares: [
    {
      id: uuidv4(),
      title: "html",
      src: "./media/softicons/logo_html.svg",
    },
    {
      id: uuidv4(),
      title: "css",
      src: "./media/softicons/logo_css.svg",
    },
    {
      id: uuidv4(),
      title: "javascript",
      src: "./media/softicons/logo_js.svg",
    },
    {
      id: uuidv4(),
      title: "python",
      src: "./media/softicons/logo_py.svg",
    },
    {
      id: uuidv4(),
      title: "django",
      src: "./media/softicons/logo_django.svg",
    },
    {
      id: uuidv4(),
      title: "sass",
      src: "./media/softicons/logo_sass.svg",
    },
    {
      id: uuidv4(),
      title: "reactjs",
      src: "./media/softicons/logo_react.svg",
    },
    {
      id: uuidv4(),
      title: "cli",
      src: "./media/softicons/logo_html.svg",
    },
    {
      id: uuidv4(),
      title: "figma",
      src: "./media/softicons/logo_html.svg",
    },
    {
      id: uuidv4(),
      title: "photoshop",
      src: "./media/softicons/logo_html.svg",
    },
    {
      id: uuidv4(),
      title: "axios",
      src: "./media/softicons/logo_html.svg",
    },
    {
      id: uuidv4(),
      title: "firebase",
      src: "./media/softicons/logo_html.svg",
    },
  ],
};