import useMensajes from "../hooks/useMensajes";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (usuario !== "") {
      navigate("/chat");
    }
  };
  const { usuario, setUsuario } = useMensajes();
  return (
    <section className="login_contenedor">
      <form className="login_form" onSubmit={handleSubmitLogin}>
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
