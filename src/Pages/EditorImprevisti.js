import { useState, useRef, useCallback, useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../context/regContext";
import { AddImprIngaggi } from "../Funzioni/AddImprIngaggi";
import { AddImprevisti } from "../Funzioni/AddImprevisti";

const EditorImprevisti = () => {
  const [selectRefState, setSelectRefState] = useState("prepartita");

  const { [selectRefState]: registro } = useContext(CartContext);

  const { sezioniAttive, defaultValues } = useContext(CartContext);

  const isVisibleArray =
    sezioniAttive?.map((number) => number.isVisible) || defaultValues;

  const selectRef = useRef(null);

  const handleSelectRef = useCallback(() => {
    setSelectRefState(selectRef.current.value);
  }, []);

  const imprevistiSecondari =
    selectRefState === "ingaggi" ||
    selectRefState === "mercato" ||
    selectRefState === "rinnovi";

  return (
    <section className="flex h-full w-full flex-col items-center justify-between overflow-y-auto p-2 font-bold md:overflow-hidden md:px-4 md:pb-2">
      <h1>Editor Imprevisti</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="h-full w-full items-center justify-between rounded-lg bg-black/50 text-gray-300 md:flex md:flex-col md:overflow-hidden md:px-2"
      >
        <div className="relative flex h-20 w-full flex-col items-center justify-start overflow-y-auto p-1 text-xs md:h-16 md:gap-2 md:text-base">
          <header className="w-full items-center justify-between overflow-hidden p-1 md:flex">
            <h3 className="w-full text-center uppercase text-[--clr-prim] md:w-1/3 md:text-start">
              Imprevisti {selectRefState}
            </h3>
            <label
              htmlFor="tipoImprevisto"
              className="flex w-full items-center justify-around md:w-1/3 md:justify-center md:gap-2"
            >
              Lista da editare
              <select
                ref={selectRef}
                onChange={handleSelectRef}
                className="w-fit self-center rounded-md border p-1 text-xs font-semibold md:text-base dark:border-black/20 dark:bg-black/30 dark:text-gray-300 dark:placeholder-black/10 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {isVisibleArray[0] && (
                  <option className="dark:bg-[--clr-ter]" value="prepartita">
                    Prepartita
                  </option>
                )}
                {isVisibleArray[1] && (
                  <option className="dark:bg-[--clr-ter]" value="settimana">
                    Settimana
                  </option>
                )}
                {isVisibleArray[2] && (
                  <option className="dark:bg-[--clr-ter]" value="serienegativa">
                    Serie Negativa
                  </option>
                )}
                <option className="dark:bg-[--clr-ter]" value="speciali">
                  Speciali
                </option>
                {isVisibleArray[3] && (
                  <option className="dark:bg-[--clr-ter]" value="rinnovi">
                    Rinnovi
                  </option>
                )}
                {isVisibleArray[4] && (
                  <option className="dark:bg-[--clr-ter]" value="ingaggi">
                    Ingaggi
                  </option>
                )}
                {isVisibleArray[5] && (
                  <option className="dark:bg-[--clr-ter]" value="mercato">
                    Mercato
                  </option>
                )}
              </select>
            </label>
            <strong className="mt-2 block text-center text-xs font-semibold md:mt-0 md:w-1/3 md:text-end md:text-base">
              Numero imprevisti: {registro?.length}
            </strong>
          </header>
        </div>

        {/* Form "AGGIUNGI Imprevisti" */}

        {imprevistiSecondari ? (
          <AddImprIngaggi tipoImprevisto={selectRefState} registro={registro} />
        ) : (
          <AddImprevisti tipoImprevisto={selectRefState} registro={registro} />
        )}
      </motion.div>
    </section>
  );
};

export default EditorImprevisti;
