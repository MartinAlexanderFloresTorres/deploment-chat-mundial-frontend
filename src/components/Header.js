import { useState } from "react";
import useMensajes from "../hooks/useMensajes";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { usuario, setMensajes, setUsuario, setModal } = useMensajes();

  return (
    <header className="header">
      <section className="header__contenido">
        <div className="header__left">
          <img src="/usuario.jpg" alt="usuario" />
          <div>
            <h3>Bienvenido 
            {usuario && <span className="usuario">{usuario}</span>}
            </h3>
          </div>
        </div>
        <div className="header__rigth">
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
                  setModal(true);
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
  );
};

export default Header;
