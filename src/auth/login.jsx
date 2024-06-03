import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../auth/authContext';
import Input from "./components/FormInput";
import { useInput } from "../hooks/useInput";
import "./Login.css";


export default function Login() {
  const {userLoggedIn} = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedIn){
       return navigate("/quiz");
    }
 },[userLoggedIn]);

  // submit
  async function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }

    if(!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(emailValue, passwordValue);
    }
  }

  return (
    <main id="login">
      <h1>Quiz App login</h1>
      <p>¿Sin cuenta aún? <Link to="/Signup">Crea una ahora</Link></p>
      <form onSubmit={handleSubmit}>
        <div className="form-group input-container">
          <label htmlFor="email">Email</label>
          <Input className="form-control" id="email" type="email" name="email" required 
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Por favor proporciona un email válido'}
          />
        </div>
        <div className="form-group input-container pass">
            <div className="input-wrapper">
              <label htmlFor="password">Contraseña</label>
              <Input  className="form-control" id="password" type="password" name="password" required 
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              value={passwordValue}
              error={passwordHasError && 'Por favor proporciona una contraseña válida'}
              />
            </div>  
          </div>
          <p className="form-controls d-flex">
                <button type="reset" className="btn btn-light reset">
                    Limpiar
                </button>
                <button type="submit" className="btn btn-primary submit">
                    Enviar
                </button>
          </p>
      </form>
    </main>
  );
}
