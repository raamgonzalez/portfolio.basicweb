import Project from './Project'
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const ProjectContainer = () => {

  const {projects} = useContext(GlobalContext)

  return (
    <>


      <section className='projects'>
        <a id="projects"></a>
        <section className="projects__title">
          <section className="projects__empty"></section>
            <section className='projects__p'>
              <p className="projects__p--title">(pr)</p>
            </section>
        </section>
        <section className='projects__section'>
          {
            projects.map((work) => (

              <Project project={work} key={work.id}/>
            
            ))
          } 
        </section>
      </section>
    </>
  )
}

export default ProjectContainer



/* filter.map(({id, title, description, price, offer, img, alt, stock},index) => (
                <Item
                id={id}
                key={id}
                title={title} 
                description={description} 
                price={price}
                img={img}
                alt={alt}
				stock={stock}
                offer={offer}
                />) */