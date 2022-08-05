import useMensajes from "../hooks/useMensajes";
import Mensaje from "./Mensaje";

const Chats = () => {
  const { mensajes, fondo } = useMensajes();
  return (
    <section className="fondo">
      <div 
        className="chats" 
        style={{
          backgroundImage: `linear-gradient(var(--bg-l1), var(--bg-l2)),url(${fondo ? fondo : "/fondo.png"})`,
        }}
      >
        {mensajes.length > 0 &&
          mensajes.map((sm) => <Mensaje key={sm.id} mensaje={sm} />)}
      </div>
    </section>
  );
};

export default Chats;
