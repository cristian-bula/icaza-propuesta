import React, { useState } from "react";
import { motion } from "framer-motion";
import IgraBuilding from "@assets/imgs/IgraBuilding.webp";
import Manos from "@assets/imgs/Manos.webp";
import IgraLogo1 from "@assets/imgs/IgraLogo1.webp";
import { Button } from "@nextui-org/button";

const HeroSection = () => {
  const [part, setPart] = useState<number>(1);

  const handleClick = () => {
    if (part < 3) {
      setPart(part + 1);
    } else {
      setPart(1);
    }
  };
  const cardStyle =
    "flex w-full h-[600px] text-white items-center justify-center layout-padding ";
  const animationProps = {
    initial: { scale: 1 },
    animate: { scale: 0.9 },
    exit: { scale: 0.5, opacity: 0 },
    transition: { duration: 0.5 },
  };

  const HeroParts: any = {
    1: (
      <div
        style={{
          backgroundImage: `url(${"https://www.icazalaw.com/wp-content/uploads/2023/02/Background-G-Icaza-Gonzalez-Ruiz-y-Aleman2.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={cardStyle}
      >
        <motion.img
          {...animationProps}
          key={1}
          onClick={handleClick}
          className="absolute mx-auto my-auto cursor-pointer z-0"
          src={IgraBuilding.src}
          alt="Imagen 1"
          width="500"
          height="200"
        />
        <motion.div
          {...animationProps}
          key={2}
          className="flex flex-col md:flex-row justify-between w-full h-full items-center z-10 mt-20 md:mt-0"
          style={{ pointerEvents: "none" }}
        >
          <div className="flex flex-col items-center md:items-start">
            <p className=" text-base md:text-sm text-secundary tracking-widest md:tracking-normal">
              SERVICIOS LEGALES
            </p>
            <h2 className="text-center md:text-left font-semibold text-3xl md:text-5xl max-w-82 md:max-w-72 mt-2 md:mt-4">
              Más de 100 años de experiencia
            </h2>
            <p className="mt-4 hidden md:block tracking-widest">
              <span className="text-secundary font-bold">0{part}</span>/03
            </p>
          </div>
          <motion.div
            {...animationProps}
            key={3}
            className="max-w-72 hidden md:block"
          >
            <p className="text-sm leading-6">
              Icaza, Gonzalez-Ruiz & Aleman es una firma de abogados
              comprometida en proveer soluciones legales integrales y prácticas
              a clientes corporativos. particulares y del sector público.
            </p>
            <Button
              className="mt-10 !bg-secundary text-white !text-xs"
              style={{ pointerEvents: "all" }}
            >
              CONOCE MÁS
            </Button>
          </motion.div>
          <svg
            className=" w-10 absolute bottom-20 md:bottom-4 animate-bounce left-0 right-0 my-auto mx-auto"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            ></path>
          </svg>
          <p className="mb-20 opacity-65 block md:hidden">
            Haga click en la imagen para navegar
          </p>
        </motion.div>
      </div>
    ),
    2: (
      <div
        style={{
          backgroundImage: `url(${"https://www.icazalaw.com/wp-content/uploads/2023/02/Background-b-Icaza-Gonzalez-Ruiz-y-Aleman2.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={cardStyle}
      >
        <motion.img
          {...animationProps}
          key={4}
          onClick={handleClick}
          className="absolute mx-auto my-auto cursor-pointer z-0"
          src={Manos.src}
          alt="Imagen 1"
          width="500"
          height="200"
        />
        <motion.div
          {...animationProps}
          key={5}
          className="flex flex-col md:flex-row justify-between w-full h-full items-center z-10 mt-20 md:mt-0"
          style={{ pointerEvents: "none" }}
        >
          <div className="flex flex-col items-center md:items-start">
            <p className=" text-base md:text-sm text-black tracking-widest md:tracking-normal">
              Experiencia
            </p>
            <h2 className="text-center md:text-left font-semibold text-3xl md:text-5xl max-w-82 md:max-w-72 mt-2 md:mt-4 text-secundary">
              Expertos comprometidos con su oficio
            </h2>
            <p className="mt-4 hidden md:block tracking-widest">
              <span className="text-black font-bold">0{part}</span>/03
            </p>
          </div>
          <motion.div
            {...animationProps}
            key={6}
            className="max-w-72 hidden md:block"
          >
            <p className="text-sm leading-6 text-black">
              Expertos con un alto nivel de preparaciön académica y una media de
              veinte anos de experiencia cubren mås de veinte areas de practica
              juridica_ A Io largo de los ahos, se han ganado el reconocimiento
              de los directorios juridicos mgs reputados del sector.
            </p>
            <Button
              className="mt-10 !bg-secundary text-white !text-xs"
              style={{ pointerEvents: "all" }}
            >
              NUESTROS EXPERTOS
            </Button>
          </motion.div>
          <svg
            className=" w-10 absolute bottom-20 md:bottom-4 animate-bounce left-0 right-0 my-auto mx-auto"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            ></path>
          </svg>
          <p className="mb-20 opacity-65 block md:hidden text-black">
            Haga click en la imagen para navegar
          </p>
        </motion.div>
      </div>
    ),
    3: (
      <div
        style={{
          backgroundImage: `url(${"https://www.icazalaw.com/wp-content/uploads/2023/02/Background-M-Icaza-Gonzalez-Ruiz-Aleman.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={cardStyle}
      >
        <motion.img
          {...animationProps}
          key={7}
          onClick={handleClick}
          className="absolute mx-auto my-auto cursor-pointer z-0 w-80 md:w-96 bottom-20 md:bottom-auto ml-0 md:ml-32"
          src={IgraLogo1.src}
          alt="Imagen 1"
          width="400"
          height="200"
        />
        <motion.div
          {...animationProps}
          key={8}
          className="flex flex-col md:flex-row justify-between w-full h-full items-center z-10 mt-20 md:mt-0"
          style={{ pointerEvents: "none" }}
        >
          <div className="flex flex-col items-center md:items-start">
            <p className=" text-base md:text-sm text-customBlue tracking-widest md:tracking-normal">
              POTENCIANDO PROYECTOS
            </p>
            <h2 className="text-center md:text-left font-semibold text-3xl md:text-5xl max-w-82 md:max-w-[550px] mt-2 md:mt-4">
              Trascendiendo fronteras, convirtiéndonos en aliados
            </h2>
            <p className="mt-4 hidden md:block tracking-widest">
              <span className="text-customBlue font-bold">0{part}</span>/03
            </p>
          </div>
          <motion.div
            {...animationProps}
            key={9}
            className="max-w-72 hidden md:block"
          >
            <p className="text-sm leading-6">
              Hemos trascendido las fronteras y nos hemos convertido en aliados
              de nuestros clientes a través de nuestras Sicinas internacionales
              en el Caribe. Sudamérica. Europa y Asia.
            </p>
            <p className="text-sm leading-6 mt-4">
              Icaza te ayuda a hacer realidad sus proyectos. proteger tu
              patrimonio y resolver tus mås complejos asuntos legales.
            </p>
            <Button
              className="mt-8 !bg-white text-secundary !text-xs font-bold"
              style={{ pointerEvents: "all" }}
            >
              ÁREAS DE PRÁCTICA
            </Button>
          </motion.div>
          <svg
            className=" w-10 absolute bottom-20 md:bottom-4 animate-bounce left-0 right-0 my-auto mx-auto"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            ></path>
          </svg>
          <p className="mb-20 opacity-65 block md:hidden">
            Haga click en la imagen para navegar
          </p>
        </motion.div>
      </div>
    ),
  };

  return (
    <div className="relative  bg-[#3e403b]">
      <p className="absolute right-8 top-5 text-white opacity-50 text-sm underline underline-offset-4 decoration-secundary cursor-pointer transition ease-in-out hover:scale-105 hover:-translate-y-1 duration-300">
        Contáctanos
      </p>
      {HeroParts[part]}
    </div>
  );
};

export default HeroSection;
