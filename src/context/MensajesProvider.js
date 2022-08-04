import { createContext, useState, useEffect } from "react";
import io from "socket.io-client";
/* const socket = io("http://localhost:4000"); */
const socket = io("https://chat-mundial.herokuapp.com");

const MensajesContext = createContext();

const MensajesProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("envio", { mensaje, usuario });
    const ms = {
      body: mensaje,
      user: "yo",
      id: Date.now(),
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    };
    setMensajes([...mensajes, ms]);
    setMensaje("");

    const contenedor = document.querySelector(".chats");
    contenedor.scrollTop = contenedor.scrollHeight;
  };

  useEffect(() => {
    const recibirSMS = (e) => {
      const ms = {
        body: e.body.mensaje,
        user: e.body.usuario,
        id: Date.now(),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      setMensajes([...mensajes, ms]);
    };

    socket.on("respuesta", recibirSMS);
    return () => {
      socket.off("respuesta", recibirSMS);
    };
  }, [mensajes, usuario]);
  return (
    <MensajesContext.Provider
      value={{
        mensaje,
        mensajes,
        setMensaje,
        handleSubmit,
        usuario,
        setUsuario,
        setMensajes,
        modal,
        setModal,
      }}
    >
      {children}
    </MensajesContext.Provider>
  );
};

export { MensajesProvider };
export default MensajesContext;
