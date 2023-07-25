import React from "react";
import profile from "../../public/assets/profile.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center mt-10 ml-10 relative">
        <div className="md:w-1/2 md:order-1 bg-white">
          <h2 className="text-3xl font-bold mb-4 text-black">Minust</h2>
          <span className="inline-block w-24 h-1 bg-yellow-300 ml-1"></span>
          <p className="mb-4 mt-4 text-black">
            Olen lõpetanud Pärnumaa Kutsehariduskeskuse 2017. aastal, saades
            kosmeetiku ja spa-teenindaja eriala koos lisaoskustega. Omades
            erialast kogemust ligi 7 aastat, olen osalenud praktikaprogrammides
            nii Islandil kui ka Kreekas. Töötasin nii Saaremaa ilusalongis kui
            ka Pärnus. Vabal ajal naudin küpsetamist, treenimist ja looduses aja
            veetmist.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-900 text-black font-bold py-2 px-4 rounded-full">
            Lisaks
          </button>
        </div>
        <div className="md:w-1/2 md:order-2 mt-6 md:mt-0 relative">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src={profile}
              alt="About Us Image"
              className="max-w-[500px] max-h-[600px]"
              layout="responsive"
              objectFit="cover"
            />
            <div className="absolute inset-0">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-yellow-400"></div>
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-yellow-400"></div>
              <div className="absolute top-0 left-1 right-1 h-1 bg-yellow-400"></div>
              <div className="absolute bottom-0 left-1 right-1 h-1 bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
