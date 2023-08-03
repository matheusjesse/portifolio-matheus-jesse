import { D } from "styled-icons/crypto";
import ResponsiveSiteContainer from "../styles/ResponsiveSiteContainer";

function ResponsiveSite() {
  return(   
    <ResponsiveSiteContainer>
        <div className="header-page">
            <h1>Site Responsivo Estudo de Caso</h1>
            <h2>Blog de tutoriais</h2>
        </div>
        <div className="overall">
            <div className="overrall-box">
                <h3>O produto:</h3>
                <p>
                    CodeMT é um site de programação com tutoriais relacionados
                     a Front-End, os principais interessados são pessoas que 
                     estão interessados a aprender programar ou se manter 
                     atualizado nas novidades.
                </p>
            </div>
            <div className="overrall-box">
                <h3>Duração do projeto:</h3>
                <p>
                    21 de junho à 07 de julho
                </p>
            </div>
            <div className="overrall-box">
                <h3>O Problema:</h3>
                <p>
                    Criar um site intuitivo e conciso que de fácil navegação, criando uma boa experiência para o usuário.
                </p>
            </div>
            <div className="overrall-box">
                <h3>O objetivo:</h3>
                <p>
                    Desenvolver um site que seja objetivo e que possa fornecer ao usuário uma boa experiência navegando entre os tutoriais e consumindo o conteúdo disponível.
                </p>
            </div>
            <div className="overrall-box">
                <h3>Minha função:</h3>
                <p>
                    UX leader, UX research, UX design
                </p>
            </div>
            <div className="overrall-box">
                <h3>Responsabilidades:</h3>
                <p>
                    Conduzir entrevista, criar wireframes de baixa e alta fidelidade, prototipos, estudos de usabilidade, considerações de acessibilidade e design responsivo. 
                </p>
            </div>
        </div>
    </ResponsiveSiteContainer>    
  );
}

export default ResponsiveSite;
