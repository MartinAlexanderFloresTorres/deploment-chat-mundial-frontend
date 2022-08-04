import useMensajes from "../hooks/useMensajes";

const Formulario = () => {
  const { mensaje, setMensaje, handleSubmit } = useMensajes();
  return (
    <section className="formulario">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={mensaje}
          onInput={(e) => setMensaje(e.target.value.trimStart())}
          placeholder="Escribe un mensaje aquí"
        />

        <button type="submit" disabled={mensaje === ""}>
          <span title="Enviar">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
              ></path>
            </svg>
          </span>
        </button>
      </form>
    </section>
  );
};

export default Formulario;
