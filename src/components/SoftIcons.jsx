import React from 'react'




const SoftIcons = (props) => {


  const {projects, softwares} = props

  //necesito un que el array projects y el array softwares se intersecten en el title y el soft y si coincide el soft que se cree un array con las imagenes que le corresponden a cada projecto


//   // const { project: {id, name, description, media, urlgit, urldeploy} } = cardP;

//   // const projectsId = projects.map((project) => {return project.media})
//   // console.log(projectsId)

//   // const softwaresId = softwares.map((software) => {return software.src})
//   // console.log(softwaresId)

console.log(projects)

  const intersected = projects.map((project) => {
    const projectSoftwares = project.soft;
    const common = softwares.filter(software => projectSoftwares.includes(software.title)).map(software => software.src);
    return common
        // <img src={common[5]}/>;
    //   id: project.id,
    //   soft: common      
  })




//   // const images = [];
//   // projects.map((project) => {
//   //   return project.soft.map((softwareTitle) => {
//   //     console.log(softwareTitle)
//   //     const software = softwares.find((s) => s.title === softwareTitle);
//   //     images.push(<img src={software.src} alt={software.title} key={software.title} />);
//   //   });
//   // });


//   // const images = []
//   // projects.map((project) => {
//   //   return console.log(project)
//   // })

// // console.log(images)

//   const intersectedMap = intersected.map((i) => { return i.soft})
//   console.log(intersectedMap)
  

  return (
      <div>
        {/* {intersected.map((src) => <img src={src}/>)} */}
      </div>
  )
}

export default SoftIcons