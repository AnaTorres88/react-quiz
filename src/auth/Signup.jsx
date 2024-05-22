
import Input from "./components/FormInput";
import "./Signup.css";

export default function Signup() {
    function handleSubmit(event) {
  
    }
    return (
      <main id="signup-form">
        <h1>Sign Up! </h1>
        <form onSubmit={handleSubmit}>
            <h2>Bienvenido/a</h2>
            <p>¿Aún no tienes una cuenta? Regístrate</p>
            
            <div className="form-group input-container">
                <label htmlFor="email">Email</label>
                <Input className="form-control" id="email" type="email" name="email" required/>
            </div>
            <div className="form-group input-container pass">
                <p className="alert">Las contraseñas no coinciden</p>
                <div className="input-wrapper">
                    <label htmlFor="password">Contraseña</label>
                    <Input className="form-control" id="password" type="password" name="password" required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="confirm-password">Confirmar Contraseña</label>
                    <Input className="form-control" id="confirm-password" type="confirm-password" name="confirm-password" required/>
                </div>
            </div>

            <div id="user-info">
                <h3>Usuario</h3>
                <div className="form-group input-container">
                    <label htmlFor="first-name">Nombre(s)</label>
                    <Input className="form-control" id="first-name" type="first-name" name="first-name" required/>
                </div>
                <div className="form-group input-container">
                    <label htmlFor="last-name">Apellido(s)</label>
                    <Input className="form-control" id="last-name" type="last-name" name="last-name" required/>
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
  