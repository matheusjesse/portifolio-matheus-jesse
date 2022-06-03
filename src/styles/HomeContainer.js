import styled from 'styled-components';


export const HomeContainer = styled.div`

height: 100%;

ul {
  width: 300px;
  display: flex;  
  list-style: none;
  margin-bottom: 48px;
}

li {
  
  height: 40px;
  width: 40px;
  margin-right: 20px;
  padding: 4px;
}

svg {
  width: 50px;
}

li:hover {
  padding: 0px;
}


h3 {
  font-size: 12px;
  text-align: center;
}

img {
  width: 495px;
  height: 514px;
  padding-bottom: 120px;
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
   height: 600px;
}

button {
  width: 243px;
  height: 55px;
  border-radius: 8px;
  border: 2px solid white;
  font-size: 20px;
  color: #F5F5F5;  
  font-weight: bold;
  box-shadow: 0px 1px 4px -1px gray;
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
