import { useState } from "react";
import useMensajes from "../hooks/useMensajes";

const Configuracion = ({ setCerrar }) => {
  const [foto, setFoto] = useState("");
  const [fondo, setFondo] = useState("");
  const {
    handleChangePerfil,
    handleChangeFondo,
    handleClickReset,
    tema,
    handleChangeTema,
  } = useMensajes();

  const handleClickGuardar = () => {
    handleChangePerfil(foto);
    handleChangeFondo(fondo);
    setCerrar(false);
  };
  return (
    <div className="configuracion">
      <div className="configuracion__item">
        <label htmlFor="imagen">Foto de perfil</label>
        <input
          accept="image/*"
          type="file"
          id="imagen"
          onChange={(e) => setFoto(e.target.files[0])}
        />
      </div>
      <div className="configuracion__item">
        <label htmlFor="fondo">Fondo de Chat</label>
        <input
          accept="image/*"
          type="file"
          id="fondo"
          onChange={(e) => setFondo(e.target.files[0])}
        />
      </div>
      <div className="configuracion__temas">
        <label htmlFor="tema">Temas</label>
        <select id="tema" value={tema} onChange={handleChangeTema}>
          <option value="default">Default</option>
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>
      <div className="configuracion__botones">
        <button
          onClick={() => {
            handleClickReset();
            setCerrar(false);
          }}
        >
          Resetear
        </button>
        <button
          disabled={foto === "" && fondo === "" && tema === "default"}
          onClick={handleClickGuardar}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
