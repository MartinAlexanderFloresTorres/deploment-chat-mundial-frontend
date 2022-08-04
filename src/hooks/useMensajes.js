import { useContext } from "react";
import MensajesContext from "../context/MensajesProvider";

const useMensajes = () => {
  return useContext(MensajesContext);
};

export default useMensajes;
