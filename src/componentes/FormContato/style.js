import styled from 'styled-components';

const FormContatoContainer = styled.div`
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menssagem-e-button {    
    display: flex;
    flex-direction: column;
  }

  input {
    width: 300px;
    height: 48px;
    border: none;
    background-color: white;
    border-radius: 8px;
    margin: 4px 0px 8px;
  }

  textarea {
    width: 300px;
    height: 140px;
    border: none;
    background-color: white;
    border-radius: 8px;
    margin: 4px 0px 8px;
  }

  button {
    height: 40px;
    border-radius: 10px;
    border: 1px solid white;
    background-color: #001319;
    font-size: 24px;
  }

  button:hover {
    background-color:#00476D;
    border: none;    
  }
  
`;

export default FormContatoContainer;
