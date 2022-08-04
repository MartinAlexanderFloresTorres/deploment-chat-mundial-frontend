import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Chats from "./components/Chats";
import useMensajes from "./hooks/useMensajes";
import { useNavigate } from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  const navigate = useNavigate();
  const { usuario } = useMensajes();
  const { modal } = useMensajes();

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
      {modal && <Modal />}
    </>
  );
}

export default App;
