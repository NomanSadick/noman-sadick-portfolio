import React from 'react'
import './Projects.css'
import LinkIcon from '@material-ui/icons/Link';
import projectData from '../../fakeData/projectData'
const Projects = () => {

  const projects = projectData[0].projects.map(projects => {
    return <div key={projects.title} className="col-lg-3 col-md-6 col-sm-6 columns portfolio-item">
      <div className="item-wrap">
        <a href={projects.url} title={projects.title}>
          <img style={{ height: '180px' }} src={projects.image} alt={projects.title} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5> {projects.title} </h5>
              <p> {projects.category} </p>
            </div>
          </div>
          <div className="link-icon"> <LinkIcon /> </div>
        </a>
      </div>

    </div>
  })


  return (
    <div className="portfolio" id="project">
      <section id="portfolio" className="container-fluid" id="Portfolio">
        <div className="row projects" style={{ maxWidth: "1300px", margin: "auto" }}>
          <div className="col-md-12 collapseed">
            <h1 className=" mb-3" > <span> Projects </span></h1>
            <h1 className="mb-5"> Check Out Some of MY projects </h1>
            <div id="portfolio-wrapper" className=" bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Projects;