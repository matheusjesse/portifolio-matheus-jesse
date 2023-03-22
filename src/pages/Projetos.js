import React from 'react';
import ProjetoContainer from '../styles/ProjetoContainer';
import {webProjects} from '../utils/HomeUtils';
import ProjectCard from '../componentes/ProjectCard';
function Projetos() {
  return(   
    <ProjetoContainer>
        <h1 className='titleProject'>Projetos</h1>
        <div className='projectMenu'>
          <div className='menuProjectWeb'>Desenvolvimento Web</div>
          <div className='menuProjextUX'>UX Designer</div>
        </div>
        <div className="projectSection">
          {
            webProjects.map((data) =>
              <ProjectCard data={data}/>          
            )            
          }
        </div>
    </ProjetoContainer>
  );
}

export default Projetos;
