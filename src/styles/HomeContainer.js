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
  justify-content: center;  
  height: 60vh;
  margin-top: 140px;
}

h1 {
  font-size: 3em;
  margin-bottom: 16px; 
  font-family: 'Biryani', sans-serif;
  text-shadow: 1px 1px #08C8A4;
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
  color: white;
  background: #08C8A4;
  font-weight: bold;
  box-shadow: 1px 1px -0px 1px #F5F5F5;
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
  text-shadow: 1px 1px 2px #20CDAC;
}

.skillContainer {
  display: flex;
  justify-content: center;
}

.skillSection {
  height: 640px;
  width: 560px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 360px 0px;
}

.skillCard {  
  width: 136px;
  height: 140px;
  display: flex;
  background: none;
  backdrop-filter: blur(22px);
  border-radius: 8px;
  padding: 8px 8px 8px 8px;
  margin-right: 8px;  
  margin-left: 8px;
}

.skillCardIcon {  
  height: 134px;
  min-width: 124px;  
  display: column;
  text-align: center;
  padding-top: 9px;
  color: white;
  margin-right: 10px;
  margin-left: 10px;
}

.skillCard:hover .skillCardText {
  color: white;
}


.skillCardIcon svg {
  width: 80px;
  fill: white;  
}

.skillCardIcon:hover svg, 
.skillCardIcon:hover p{
  fill:#20CDAC;
  color: #20CDAC;
}

.skillCardIcon p {
  width: 122px;
  font-size: 14px;
}

.skillCardHr {
  width: 100%;
  visibility: hidden;
}

.skillHr {
  height: 580px;
  width: 1px;
  color: rgb(23,22,24);
  border: none;
  background-color: rgb(23,22,24);
  box-shadow: 1px 1px 2px -0px #F5F5F5;
}

.descriptionSection {
  display: flex;
  width: 510px;
  align-content: flex-start;
  flex-wrap: wrap;
}

.descriptionSection h2{
  height: 80px;
  font-family: 'Encode Sans Expanded', sans-serif;
}

.descriptionSection {
  margin-left: 50px;
}


`;

export default HomeContainer;
