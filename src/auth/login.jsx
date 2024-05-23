import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import Input from "./components/FormInput";
import { useInput } from "../hooks/useInput";
import "./Login.css";

export default function Login() {
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

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
  }

  return (
    <main id="login">
      <h1>Quiz App login</h1>
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
