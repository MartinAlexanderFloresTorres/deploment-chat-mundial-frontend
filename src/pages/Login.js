import useMensajes from "../hooks/useMensajes";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { usuario, setUsuario, activos } = useMensajes();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (usuario !== "") {
      navigate("/chat");
    }
  };
  return (
    <section className="login_contenedor">
      <form className="login_form" onSubmit={handleSubmitLogin}>
        <div className="activos">
          <h2>Contectados {activos}</h2>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
        <input
          value={usuario}
          onInput={(e) => setUsuario(e.target.value.trimStart())}
          type="text"
          placeholder="Ingrese su nombre"
        />
        <input type="submit" disabled={usuario === ""} value={"Entrar"} />
      </form>
    </section>
  );
};

export default Login;
