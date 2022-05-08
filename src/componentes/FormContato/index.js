import React, { useEffect, useState } from 'react';
import FormContatoContainer from './style';

function FormContato() {
  const [ inputValues, setInputValues] = useState({
      name: '',
      email: '',
      message: '',
    }); 
  const [ loading, setLoading ] = useState(false);
  const [ isDisabled, setDisabled ] = useState(true);

  const delay = ms => new Promise(res => setTimeout(res, ms));
 
  const handleSubmit = async () => {    
    setLoading(true);
    await delay(5000);
    setLoading(false);   
  }

  useEffect(() => {
    validationButton();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);

  const handleChange = ({ target }) => {
    const { name, value } = target;   
    setInputValues({
      ...inputValues,
      [name]: value,
    })   
  }

  const validationButton = () => {
    const lengthValidation = inputValues.name.length > 4 
    && inputValues.message.length >= 8;
    const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
    const validationEmail = regex.test(email);
    const validation = lengthValidation && validationEmail;
    if (validation) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const { name, email, message } = inputValues;
  return(
    <FormContatoContainer>
      <h1>Menssagem</h1>
      <form
        action="https://formsubmit.co/2a71ee4e83d2a63d27b27cd872e84c5b"
        id="form-contato"
        method="POST"
      >
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            value={ name }
            onChange={ handleChange }
            readOnly={ loading ? "readonly" : '' }
            autocomplete="off"
          />
        </label>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-Mail"
            value={ email }
            onChange={ handleChange }
            readOnly={ loading ? "readonly" : '' }
            autocomplete="off"
          />
        </label>
        <div className="menssagem-e-button">
          <label htmlFor="text-area-messagem">
            <textarea
              name="message"
              id="message"
              form="form-contato"
              placeholder="Menssagem..."
              value={ message }
              onChange={ handleChange }
              readOnly={ loading ? "readonly" : '' }
            />
          </label>
          <button
            type="submit"
            onClick={ handleSubmit }
            disabled={ isDisabled }
          >
            ENVIAR
          </button>
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/contato" />
      </form>
      { loading ? (<h1>ENVIANDO...</h1>) : '' }
      
    </FormContatoContainer>    
  );
}

export default FormContato;
