import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/imgs/img1.jpg";
import Img2 from "../assets/imgs/img2.jpg";
import Img3 from "../assets/imgs/img3.jpg";
import Img4 from "../assets/imgs/img4.jpg";
import Img5 from "../assets/imgs/img5.jpg";
import rinnovi from "../assets/imgs/rinnovi.jpg";
import ingaggi from "../assets/imgs/ingaggi.jpg";
import mercato from "../assets/imgs/mercato.jpg";
import WelcomeModal from "../Components/WelcomeModal";

const dettagliImprevisti = [
  { id: 1, impr: "Imprevisti prepartita", img: Img1, link: "/prepartita" },
  { id: 2, impr: "Imprevisti Settimanali", img: Img2, link: "/settimana" },
  {
    id: 3,
    impr: "Imprevisti serie negativa",
    img: Img3,
    link: "/serie-negativa",
  },
  {
    id: 4,
    impr: "Imprevisti Rinnovi",
    img: rinnovi,
    link: "/rinnovi",
  },
];
const dettagliImprevisti2 = [
  {
    id: 5,
    impr: "Imprevisti Ingaggi",
    img: ingaggi,
    link: "/ingaggi",
  },
  {
    id: 6,
    impr: "Imprevisti Mercato",
    img: mercato,
    link: "/mercato",
  },
  {
    id: 7,
    impr: "Media Overall",
    img: Img4,
    link: "/calcolo-media",
  },
  {
    id: 8,
    impr: "Editor Imprevisti",
    img: Img5,
    link: "/editor-imprevisti",
  },
];

const Home = () => {
  return (
    <>
      <WelcomeModal />
      <section className="flex h-1/2 w-full flex-col flex-wrap items-center justify-around bg-stone-950 font-bold text-gray-800 md:flex-row md:flex-nowrap">
        {dettagliImprevisti.map((el) => (
          <div
            key={el.id}
            style={{
              zIndex: el.id,
            }}
            className="ease-[cubic-bezier(0.770, 0.000, 0.175, 1.000)] group flex h-1/4 w-full cursor-pointer items-center justify-start transition-all duration-500 [box-shadow:-12px_0px_10px_-3px_rgba(2,2,2,0.5)] hover:text-gray-300 md:h-full md:w-1/4 md:hover:h-full md:hover:w-full"
          >
            <h2
              style={{}}
              className="flex h-full w-1/4 rotate-180 items-center justify-center bg-[--clr-ter] px-4 text-center text-[.4rem] font-bold uppercase text-gray-200 drop-shadow-lg transition-all [text-shadow:rgb(34,34,34)_0px_4px_4px] [writing-mode:vertical-lr] group-hover:w-1/6 group-hover:border-l-[.35rem] group-hover:border-[--clr-ter] group-hover:bg-[--clr-sec] group-hover:px-6 md:w-auto md:justify-start md:px-2 md:ps-4 md:text-[1.5dvw] md:group-hover:w-auto md:group-hover:border-l-[.5rem]"
            >
              {el.impr}
            </h2>
            <div
              style={{
                backgroundImage: `url(${el.img})`,
              }}
              className="flex h-full w-5/6 items-end justify-end bg-black/20 bg-cover bg-top bg-no-repeat grayscale transition-all group-hover:w-5/6 group-hover:grayscale-0 md:w-full md:bg-center md:group-hover:w-full "
            >
              <Link
                to={el.link}
                className="block h-full w-full bg-transparent"
              ></Link>
            </div>
          </div>
        ))}
      </section>
      <section className="flex h-1/2 w-full flex-col flex-wrap items-center justify-around bg-stone-950 font-bold text-gray-800 md:flex-row md:flex-nowrap">
        {dettagliImprevisti2.map((el) => (
          <div
            key={el.id}
            style={{
              zIndex: el.id,
            }}
            className="ease-[cubic-bezier(0.770, 0.000, 0.175, 1.000)] group flex h-1/4 w-full cursor-pointer items-center justify-start transition-all duration-500 [box-shadow:-12px_0px_10px_-3px_rgba(2,2,2,0.5)] hover:text-gray-300 md:h-full md:w-1/4 md:hover:h-full md:hover:w-full"
          >
            <h2
              style={{}}
              className="flex h-full w-1/4 rotate-180 items-center justify-center bg-[--clr-prim] px-4 text-center text-[.4rem] font-bold uppercase text-gray-200 drop-shadow-lg transition-all [text-shadow:rgb(34,34,34)_0px_4px_4px] [writing-mode:vertical-lr] group-hover:w-1/6 group-hover:border-l-[.35rem] group-hover:border-[--clr-prim] group-hover:bg-[--clr-sec] group-hover:px-6 md:w-auto md:justify-start md:px-2 md:ps-6 md:text-[1.5dvw] md:group-hover:w-auto md:group-hover:border-l-[.5rem]"
            >
              {el.impr}
            </h2>
            <div
              style={{
                backgroundImage: `url(${el.img})`,
              }}
              className="flex h-full w-5/6 items-end justify-end bg-black/20 bg-cover bg-top bg-no-repeat grayscale transition-all group-hover:w-5/6 group-hover:grayscale-0 md:w-full md:bg-center md:group-hover:w-full "
            >
              <Link
                to={el.link}
                className="block h-full w-full bg-transparent"
              ></Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
