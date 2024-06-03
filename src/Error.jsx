import "./Error.css";
export default function ErrorPage() {
  return (
    <section id="error404" className="container-fluid">
      <div className="text">
        <h1>¡ERROR 404!</h1>
        <p>¡Esta página no existe!</p>
      </div>

      <aside>
      <i className="bi bi-exclamation-octagon"></i>
      </aside>

    </section>
  );
}
