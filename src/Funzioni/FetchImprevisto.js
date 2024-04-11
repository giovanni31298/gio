import { useContext } from "react";
import { CartContext } from "../context/regContext";
import { initialMessage } from "../Components/InitialMessage";
import random from "random";
import SecondaEstrazione from "../Components/SecondaEstrazione";

export default function FetchData(props) {
  const { speciali } = useContext(CartContext);

  const casuale =
    speciali?.length > 0 ? random.choice(speciali) : initialMessage;

  const { titolo, descrizione } = casuale;

  const {tipoImprevisto} = props

  return (
    <>
      <section
        id="FetchImprevisto"
        className="flex h-3/4 flex-col items-center gap-8 md:h-full"
      >
        <h4 className="text-2xl font-extrabold uppercase md:text-5xl">
          {titolo}
        </h4>
        <p
          className={`h-1/4 overflow-y-auto px-4 font-Descr md:w-3/4 ${
            descrizione && descrizione.length > 40
              ? "text-sm md:text-xl"
              : "text-xl md:text-3xl"
          }`}
        >
          {descrizione}
        </p>
      </section>
      {tipoImprevisto !== "settimana" && <SecondaEstrazione />}
    </>
  );
}
