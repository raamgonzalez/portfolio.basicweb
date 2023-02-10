import React from 'react'


const SoftIcons = (props) => {

  const { softwares, projects } = props
  console.log(softwares)

  // const searchSoft = (softwares, projects) => {

  // }

  // const intersection = projects.filter(project =>{
  //   return softwares.some(software => {
  //     return project.soft === software.title;
  //   });
  // });


  // const intersected = projects.map(project => {
  //   const projectSoftwares = project.soft;
  //   const common = softwares.filter(software => projectSoftwares.includes(software.title)).map(software => software.src);
  //   return {
  //     id: project.id,
  //     softwares: common
  //   };
  // });
  
  // console.log(intersected)
  // const getSoft = (projects) => {
  //   const soft = []
  //   projects.forEach(project => {
  //     soft.push(project.software)
  //   })
  //   console.log(soft)
  //   return soft
  // }

//  useEffect(() => {
//    getSoft()

//    return () => {
     
//    }
//  }, [])
 
  

  return (
    <div>Icons</div>
  )
}

export default SoftIcons