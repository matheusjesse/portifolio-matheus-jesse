import styled from 'styled-components';

export const HomeContainer = styled.div`
  

ul {
  display: flex;
  list-style: none;
  margin-bottom: 48px;  
}

li {
  height: 46px;
  width: 46px;
  margin-right: 30px;
}

img {
  width: 595px;
  height: 314px;
}

.contato-body {
  display: flex;
  justify-content: space-around;  
  width: 100vw;
  height: 100vh;
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
  width: 40%;  
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
  color: #031014;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltipText {
  visibility: hidden;
  width: 280px;
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
  margin-left: -130px; 
}

.tooltip:hover .tooltipText {
  visibility: visible;
}

`;

export default HomeContainer;
