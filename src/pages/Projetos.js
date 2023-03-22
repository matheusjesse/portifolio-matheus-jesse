import React, { useState } from 'react';
import ProjetoContainer from '../styles/ProjetoContainer';
import {webProjects} from '../utils/HomeUtils';
import ProjectCard from '../componentes/ProjectCard';

const EmptyProjextUX = () => {
  return(
    <div>Em Desenvolvimento</div>
  )
}

function Projetos() {
  const [projects, setProjects] = useState(true);

  return(   
    <ProjetoContainer>
        <h1 className='titleProject'>Projetos</h1>
        <div className='projectMenu'>
          <div className='menuProjectWeb' onClick={ () => setProjects(true)}>Desenvolvimento Web</div>
          <div className='menuProjextUX' onClick={ () => setProjects(false)}>UX Designer</div>
        </div>
        <div className="projectSection">
          {
            projects ?
            webProjects.map((data) =>
              <ProjectCard key={data.id} data={data}/>          
            ) :   <EmptyProjextUX />
          }
        </div>
    </ProjetoContainer>
  );
}

export default Projetos;
