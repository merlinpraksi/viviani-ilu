import Image from "next/image";
import hero from "../../public/assets/hero.png";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image src={hero} alt="Hero Image" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-golden font-serif font-british-castilla text-80 font-normal leading-normal capitalize">
          Naudi
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
          Erilist kohtlemist
        </h1>
        <div className="w-24 h-1 mx-auto bg-yellow-400"></div>
        <p className="p-4 md:p-8 lg:p-12">
          Minu ilutoa missioon on muuta Sinu ilu säravamaks ning tuua naeratus
          Sinu näole
        </p>
        <div className="flex justify-center items-center mb-8">
          <a className="bg-yellow-400 hover:bg-yellow-600 text-black hover:text-white py-2 px-6 rounded-full text-lg font-semibold shadow-lg transition-colors mr-4">
            Vaata teenuseid
          </a>
          <a
            href="#"
            className="bg-transparent border border-white text-black py-2 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-black transition-colors"
          >
            Võta ühendust
          </a>
        </div>
      </div>
    </div>
  );
}
