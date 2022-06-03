import styled from 'styled-components';

export const HomeContainer = styled.div`   

ul {
  display: flex;
  list-style: none;
  margin-bottom: 48px;  
}

li {
  height: 65px;
  width: 65px;
  margin-right: 30px;
  padding: 10px;
}

li:hover {
  padding: 0px;
}

img {
  width: 595px;
  height: 314px;
}

.contato-body {
  display: flex;
  justify-content: space-evenly;  
  width: 100vw;
  height: 73vh;
  margin-top: 170px;
}

h1 {
  margin-bottom: 16px;
}

p {
  width: 450px;
  font-size: 1.3em;
  margin-bottom: 48px;
}

h2 {
  margin-bottom: 16px;
}

.section-left {
  width: 560px;
  height: 400px;
  
}

.section-right {
   width: 560px;
}

hr {
  height: 380px;

}


button {
  width: 243px;
  height: 55px;
  border-radius: 8px;
  border: 2px solid white;
  font-size: 20px;
}

button:hover {
  border: none;
  background-color: #F5F5F5;
  color: #00476D;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltipText {
  visibility: hidden;
  width: 250px;
  background-color: #F5F5F5;
  color: #031014;
  text-align: center;
  padding: 5px;
  border-radius: 4px; 
  position: absolute;
  z-index: 1;
  text-align: left;
  bottom: 100%;
  left: 50%;
  margin-left: -118px; 
}

.tooltip:hover .tooltipText {
  visibility: visible;
}

`;

export default HomeContainer;
