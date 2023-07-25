import React from "react";
import Image from "next/image";
import facial from "../../public/assets/facial.png";
import lashes from "../../public/assets/lashes.png";
import manicure from "../../public/assets/pedicure.png";
import pedicure from "../../public/assets/manicure.png";

const Services = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Minu teenused</h2>
        <div className="w-24 h-1 mx-auto bg-yellow-400"></div>
        <p className="text-gray-600 text-center mb-8 mt-8">
          Pakume mitmekülgseid teenuseid, mis aitavad sul säilitada kauni ja
          särava välimuse. Olgu sul vaja lõõgastavat näohooldust, hoolikalt
          teostatud maniküüri või mõnda meie uuenduslikku iluprotseduuri, siin
          saad endale nautida tõeliselt mõnusat ja luksuslikku aega.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/4 px-2 relative">
            <Image src={facial} alt="Service 1" className="w-full h-auto" />
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <span className="text-white text-xl font-bold">Näohooldused</span>
            </div>
          </div>
          <div className="w-full sm:w-1/4 px-2 relative">
            <Image src={lashes} alt="Service 2" className="w-full h-auto" />
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <span className="text-white text-xl font-bold">
                Ripsmed/Kulmud
              </span>
            </div>
          </div>
          <div className="w-full sm:w-1/4 px-2 relative">
            <Image src={pedicure} alt="Service 3" className="w-full h-auto" />
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <span className="text-white text-xl font-bold">Pediküür</span>
            </div>
          </div>
          <div className="w-full sm:w-1/4 px-2 relative">
            <Image src={manicure} alt="Service 4" className="w-full h-auto" />
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <span className="text-white text-xl font-bold">Maniküür</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
