import React from 'react'


const SoftwareImage = ({ software }) => (
  <img src={software.src} alt={software.title} />
);


const SoftIcons = ({ softwares, projects }) => {



  // const intersected = projects.map((project) => {
  //   const projectSoftwares = project.soft;
  //   const common = softwares.filter(software => projectSoftwares.includes(software.title)).map(software => software.src);
  //   return {
  //     id: project.id,
  //     soft: common
  //   };
  // })

  // console.log(intersected)

  // const images = [];
  // projects.forEach((project) => {
  //   project.soft.forEach((softwareTitle) => {
  //     const software = softwares.find((s) => s.title === softwareTitle);
  //     images.push(<img src={software.src} alt={software.title} key={software.title} />);
  //   });
  // });

// console.log(images)

  

  return (
      <div>
        test
      </div>
  )
}

export default SoftIcons