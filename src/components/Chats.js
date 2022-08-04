import useMensajes from "../hooks/useMensajes";
import Mensaje from "./Mensaje"

const Chats = () => {
  const { mensajes } = useMensajes();
  return (
    <section className="fondo">
      <div className="chats">
        {mensajes.length > 0 &&
          mensajes.map((sm) => <Mensaje key={sm.id} mensaje={sm} />)}
      </div>
    </section>
  );
};

export default Chats;
