import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Chats from "./components/Chats";
import useMensajes from "./hooks/useMensajes";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { usuario } = useMensajes();

  useEffect(() => {
    if (usuario === "") {
      navigate("/");
    }
  }, [usuario, navigate]);
  return (
    <>
      <Header />
      <Chats />
      <Formulario />
    </>
  );
}

export default App;
