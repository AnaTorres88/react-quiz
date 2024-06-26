

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { isNotEmpty } from '../util/validation.js';
import "./Signup.css";

export default function Signup() {
    const navigate = useNavigate();
    const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
    const [passwordWeak, setPasswordWeak] = useState(false);
    const [firstNameEmpty, setFirstNameEmpty] = useState(false);
    const [LastNameEmpty, setLastNameEmpty] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        const enteredEmail = fd.get("email");
        const enteredFirstName = fd.get("first-name");
        const enteredLastName = fd.get("last-name");
        if(enteredEmail.trim().length === 0) {
            return;
        }
        if(!(data.password, 6)){
            setPasswordWeak(true);
        }
        if(data.password.trim() !== data['confirm-password'].trim()) {
            setPasswordsAreNotEqual(true);
            return;
        }
        if(!isNotEmpty(enteredFirstName)) {
            setFirstNameEmpty(true);
            return;
        }
        if(!isNotEmpty(enteredLastName)) {
            setLastNameEmpty(true);
            return;
            
        }
        if(!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(data.email, data.password)
            .then(()=> {
                navigate("/");
            })
            .catch((error) => {
                console.warn(error, "No fue posible crear el usuario. Intenta de nuevo");
            });
        }
        event.target.reset();
    }
    return (
      <main id="signup-form" >
        <h1>Sign Up! </h1>
        <form onSubmit={handleSubmit} onReset={()=>{}}>
            <h2>Bienvenido/a</h2>
            <p>¿Aún no tienes una cuenta? Regístrate</p>
            
            <div className="form-group input-container">
                <label htmlFor="email">Email</label>
                <input className="form-control" id="email" type="email" name="email" required/>
            </div>
            <div className="form-group input-container pass">
                {passwordsAreNotEqual && <p className="alert">Las contraseñas no coinciden</p>}
                {passwordWeak && <p className="alert">La contraseña debe tener al menos 6 caracteres.</p>}
                <div className="input-wrapper">
                    <label htmlFor="password">Contraseña</label>
                    <input className="form-control" id="password" type="password" name="password" required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="confirm-password">Confirmar Contraseña</label>
                    <input className="form-control" id="confirm-password" type="password" name="confirm-password" required/>
                </div>
            </div>

            <div id="user-info">
                <h3>Usuario</h3>
                <div className="form-group input-container">
                    {firstNameEmpty && <p className="alert">Escribe tu nombre</p>}

                    <label htmlFor="first-name">Nombre(s)</label>
                    <input className="form-control" id="first-name" type="first-name" name="first-name" required/>
                </div>
                <div className="form-group input-container">
                    {LastNameEmpty && <p className="alert">Escribe tu apellido</p>}

                    <label htmlFor="last-name">Apellido(s)</label>
                    <input className="form-control" id="last-name" type="last-name" name="last-name" required/>
                </div>
            </div>
            <p className="form-group form-controls d-flex">
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
  