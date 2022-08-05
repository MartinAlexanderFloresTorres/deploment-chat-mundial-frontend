import { useState } from "react";
import useMensajes from "../hooks/useMensajes";

const EditarNombre = ({ setCerrar }) => {
  const [nombre, setNombre] = useState("");
  const { setUsuario } = useMensajes();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (nombre === "") return;
    setUsuario(nombre);
    setCerrar(false);
  };
  return (
    <form className="editar_form" onSubmit={handleSubmitLogin}>
      <input
        value={nombre}
        onInput={(e) => setNombre(e.target.value.trimStart())}
        type="text"
        placeholder="Edita tu nombre"
      />
      <input type="submit" disabled={nombre === ""} value={"Guardar Cambios"} />
    </form>
  );
};

export default EditarNombre;
