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

li svg:hover {
  fill: #08C8A4;
}

h3 {
  font-size: 12px;
  text-align: center;
}

img {
  width: 594px;
  height: 594px;
  padding-bottom: 180px;
}

.contato-body {
  display: flex;
  justify-content: space-evenly;  
  width: 100vw;
  height: 73vh;
  margin-top: 170px;
}

h1 {
  font-size: 3em;
  margin-bottom: 16px; 
  font-family: 'Biryani', sans-serif;
}

p {
  width: 450px;
  font-size: 1.2em;
  margin-bottom: 48px;
  font-family: 'Biryani', sans-serif;
  
}

h2 {
  font-size: 1.3em;
  margin-bottom: 16px;
  font-family: 'Biryani', sans-serif;
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
  border: none;
  font-size: 20px;
  color: #08C8A4;  
  font-weight: bold;
  box-shadow: 0px 0px 1px 1px #F5F5F5;
  font-family: 'Biryani', sans-serif;
  padding-top: 6px;
}

button:hover {
  border: none;
  background-color: #F5F5F5;
  color: #08C8A4;
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

.skillTitle {
  text-align: center;
  width: 100%;
}

.skillSection {
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.skillCard {  
  width: 140px;
  height: 150px;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0px);
  border-radius: 8px;
  padding: 8px 8px 8px 8px;
  transition-duration: 1s;
  transition-timing-function: ease;
  overflow: hidden;
  box-shadow: 1px 1px 22px -2px black;
}

.skillCardIcon {  
  height: 134px;
  min-width: 124px;  
  display: column;
  text-align: center;
  padding-top: 9px;
}

.skillCardText {
  height: 124px;
  padding-left: 8px;
  padding-right: 12px;
  padding-top: 18px;
  text-align: center;
  overflow: hidden;
}

.skillCard:hover {
  width: 360px;
  transition: 1s;
  transition-timing-function: ease;
}

.skillCard:hover .skillCardText {
  color: white;
}

.skillCardIcon svg {
  width: 90px;
  fill: #f5f5f5;  
}



`;

export default HomeContainer;
