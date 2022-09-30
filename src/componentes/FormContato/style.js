import styled from 'styled-components';

const FormContatoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  height: 500px;

  .formSection {
    height: 500px;
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);   
    border-radius: 10px;
  
  }

  svg {
    width: 622px;
    height: 440px;
    transform: rotate(-20deg);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    height: 600px;
  }

  label {
  }
  .menssagem-e-button {    
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #F5F5F5;
  }
  input {
    width: 300px;
    height: 48px;
    border: none;
    background: none;   
    box-shadow: 0px 0px 4px  #20CDAC;
    border-radius: 8px;
    margin: 4px 0px 8px;
    color: #F5F5F5;
    font-size: 22px;
    padding-left: 6px;
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);   
  }

  textarea {
    width: 300px;
    height: 140px;
    border: none;
    background: none;
    border-radius: 8px;
    margin: 4px 0px 8px;
    font-size: 22px;
    padding-left: 6px;
    color: #F5F5F5;
    box-shadow: 0px 0px 4px  #20CDAC;
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
  }


  button {
    height: 40px;
    border-radius: 10px;
    font-size: 24px;    
    color: #F5F5F5;
    background: #20CDAC;
  }

  button:hover {
    border: none;
  }
  
  button:disabled {
        background-color: gray;
        color: white;
    } 
`;

export default FormContatoContainer;
