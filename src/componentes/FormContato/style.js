import styled from 'styled-components';

const FormContatoContainer = styled.div`
  height: 420px;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);   
  border-radius: 10px;
  background: #F5F5F5;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  label {
    background-color: #F5F5F5;
  }
  .menssagem-e-button {    
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
  }

  h1 {
    background: #F5F5F5;
    color: #00638A;
  }
  input {
    width: 300px;
    height: 48px;
    border: none;
    background: #F5F5F5;
   
    border-radius: 8px;
    margin: 4px 0px 8px;
    color: #001319;
    font-size: 22px;
    padding-left: 6px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);   
  }

  textarea {
    width: 300px;
    height: 140px;
    border: none;
    background: #F5F5F5;
    border-radius: 8px;
    margin: 4px 0px 8px;
    font-size: 22px;
    padding-left: 6px;
    color: #001319;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);   
  }

  input::placeholder {
    color: #405157;
  }

  textarea::placeholder {
    color: #405157;
  }

  textarea:focus, input:focus{
    outline: none;
    border: 1px solid #00638A;
  }


  button {
    height: 40px;
    border-radius: 10px;
    border: 1px solid white;
    background-color: #00476D;
    font-size: 24px;    
  }

  button:hover {
    background-color:#00638A;
    border: none;    
  }
  
  button:disabled {
        background-color: #405157;
        color: white;
    } 
`;

export default FormContatoContainer;
