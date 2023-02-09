import { v4 as uuidv4} from 'uuid';

export const data = {
  
  projects: [
    {
      id: uuidv4(),
      name: "tienda de tecnología",
      description:
        "Blog de Arquitectura que contiene una consola de admin y cards con obras de arquitectura y arquitectos.",
      soft: [ "html", "css", "javascript", "sass", "python"],
      media: "./media/projects/test.jpg",
    },
    {
      id: uuidv4(),
      name: "website portfolio",
      description: "This is a project",
      soft: [ "html", "css", "javascript", "sass", "python"],
      media: "./media/projects/test.jpg",
    },
    {
      id: uuidv4(),
      name: "blog arquitectura",
      description: "This is a project",
      soft: [ "html", "css", "javascript", "sass", "python"],
      media: "./media/projects/test.jpg",
    },
    {
      id: uuidv4(),
      name: "landing-page lamparas",
      description: "This is a project",
    soft: [ "html", "css", "javascript", "sass", "python"],
      media: "./media/projects/test.jpg",
    },
    {
      id: uuidv4(),
      name: "tienda de camiseta",
      description: "This is a project",
      soft: [ "html", "css", "javascript", "sass", "python"],
      media: "./media/projects/test.jpg",
    },
  ],

  softwares: [
    {
      id: uuidv4(),
      title: "html",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "css",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "javassript",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "python",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "django",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "sass",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "reactjs",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "cli",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "figma",
      src: "#",
    },
    {
      id: uuidv4(),
      title: "photoshop",
      src: "#",
    },
  ],
};