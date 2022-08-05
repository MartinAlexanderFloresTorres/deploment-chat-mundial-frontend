import { useState } from "react";
import useMensajes from "../hooks/useMensajes";
import Configuracion from "./Configuracion";
import EditarNombre from "./EditarNombre";
import Modal from "./Modal";
import Redes from "./Redes";

const Header = () => {
  const [editar, setEditar] = useState(false);
  const [redes, setRedes] = useState(false);
  const [menu, setMenu] = useState(false);
  const [configuracion, setConfiguracion] = useState(false);
  const { usuario, setMensajes, setUsuario, foto, activos } = useMensajes();

  /* ${process.env.PUBLIC_URL} */
  return (
    <>
      <header className="header">
        <section className="header__contenido">
          <div className="header__left">
            <img src={`${foto ? foto : "/usuario.jpg"}`} alt="usuario" />
            <div>
              <h3>
                Bienvenido
                {usuario && <span className="usuario">{usuario}</span>}
              </h3>
            </div>
          </div>
          <div className="header__rigth">
            <div className="activos">
              <h2>{activos}</h2>
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
            <button
              title="Cerrar Sesión"
              onClick={() => {
                setMenu(false);
                setMensajes([]);
                setUsuario("");
              }}
            >
              <svg
                style={{ width: "25px" }}
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
            <div className="configuracion">
              <button title="Menu" onClick={() => setMenu(!menu)}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                  ></path>
                </svg>
              </button>
              <div className={`opciones ${menu && "active"}`}>
                <button
                  title="Redes Sociales"
                  onClick={() => {
                    setMenu(false);
                    setRedes(true);
                  }}
                >
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span>Redes Sociales</span>
                </button>
                <button
                  title="Vaciar Chat"
                  onClick={() => {
                    setMenu(false);
                    setMensajes([]);
                  }}
                >
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
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>Vaciar Chat</span>
                </button>
                <button
                  title="Editar Nombre"
                  onClick={() => {
                    setEditar(!editar);
                    setMenu(false);
                  }}
                >
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span>Editar Nombre</span>
                </button>
                <button
                  title="Configuración"
                  onClick={() => {
                    setMenu(false);
                    setConfiguracion(true);
                  }}
                >
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Configuración</span>
                </button>
                <button
                  title="Cerrar Sessión"
                  onClick={() => {
                    setMenu(false);
                    setMensajes([]);
                    setUsuario("");
                  }}
                >
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
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>

      {redes && <Modal setCerrar={setRedes}>{<Redes />}</Modal>}
      {editar && (
        <Modal setCerrar={setEditar}>
          {<EditarNombre setCerrar={setEditar} />}
        </Modal>
      )}
      {configuracion && (
        <Modal setCerrar={setConfiguracion}>
          {<Configuracion setCerrar={setConfiguracion} />}
        </Modal>
      )}
    </>
  );
};

export default Header;
