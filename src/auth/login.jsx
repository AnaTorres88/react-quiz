import Input from "./components/FormInput";
import "./Login.css";
export default function Login() {
  function handleSubmit(event) {

  }
  return (
    <main id="login">
      <h1>Quiz App login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group input-container">
                  <label htmlFor="email">Email</label>
                  <Input className="form-control" id="email" type="email" name="email" required/>
        </div>
        <div className="form-group input-container pass">
            <div className="input-wrapper">
                <label htmlFor="password">Contraseña</label>
                <Input  className="form-control" id="password" type="password" name="password" required/>
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
