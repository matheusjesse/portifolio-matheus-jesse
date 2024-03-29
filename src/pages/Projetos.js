import React, { useState } from 'react';
import ProjetoContainer from '../styles/ProjetoContainer';
import {webProjects, webProjectsUX} from '../utils/HomeUtils';
import ProjectCard from '../componentes/ProjectCard';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import ProjectCardUX from '../componentes/ProjectCardUX';

function Projetos() {
  const [projects, setProjects] = useState(true);

  return(   
    <ProjetoContainer>
        <Header title="projetos"/>
        <h1 className='titleProject'>Projetos</h1>
        <div className='projectMenu'>
          <div className={`menuProjectWeb ${projects ? "menuSelect" : ""}` } onClick={ () => setProjects(true)}>Desenvolvimento Web</div>
          <div className={`menuProjextUX ${!projects ? "menuSelect" : ""}`} onClick={ () => setProjects(false)}>UX Designer</div>
        </div>
        <div className="projectSection">
          {
            projects ?
            webProjects.map((data, index) =>
              <ProjectCard key={data.id} data={data} index={index}/>          
            ) : webProjectsUX.map((item) => <ProjectCardUX key={item.id} data={item} />)  
          }
        </div>
        <Footer />
    </ProjetoContainer>
  );
}

export default Projetos;
