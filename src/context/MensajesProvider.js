import { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

//=============== conectar con el backend ===============//
const socket = io("http://localhost:4000");
const MensajesContext = createContext();

const MensajesProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [foto, setFoto] = useState("");
  const [fondo, setFondo] = useState("");
  const [activos, setActivos] = useState(0);
  const [tema, setTema] = useState("default");

  useEffect(() => {
    const body = document.querySelector("body");
    const getTema = localStorage.getItem("tema");
    if (getTema !== "default" && getTema !== null) {
      body.classList.add(getTema);
      setTema(getTema);
    }
  }, []);

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
    socket.on("actualizar", (n) => {
      setActivos(n - 1);
    });
    return () => {
      socket.off("respuesta", recibirSMS);
    };
  }, [mensajes, usuario, foto]);

  const handleChangePerfil = (url) => {
    if (url) {
      const src = URL.createObjectURL(url);
      setFoto(src);
      localStorage.setItem("foto", src);
    }
  };
  const handleChangeFondo = (url) => {
    if (url) {
      const src = URL.createObjectURL(url);
      setFondo(src);
      localStorage.setItem("fondo", src);
    }
  };
  const handleClickReset = () => {
    setFondo("");
    setFoto("");
    setTema("")
    document.querySelector("body").removeAttribute("class")
    localStorage.clear("tema")
  };

  const handleChangeTema = (e) => {
    let tema = e.target.value;
    localStorage.setItem("tema", tema);
    setTema(tema);
    const body = document.querySelector("body");
    if (tema === "default") {
      body.removeAttribute("class");
    } else {
      body.removeAttribute("class");
      body.classList.add(tema);
    }
  };
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
        handleChangePerfil,
        handleChangeFondo,
        handleClickReset,
        foto,
        fondo,
        activos,
        setActivos,
        tema,
        handleChangeTema,
      }}
    >
      {children}
    </MensajesContext.Provider>
  );
};

export { MensajesProvider };
export default MensajesContext;
