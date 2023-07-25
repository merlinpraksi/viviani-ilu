import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import logo from "../../public/assets/logo.png";

const Footer = () => {
  return (
    // <footer className="bg-black text-white">
    //   <div className="container mx-auto py-8">
    //     <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
    //       <div className="mb-4 flex flex-col justify-center items-center">
    //         <div>
    //           <Image src={logo} />
    //         </div>
    //         <div />
    //         <div>
    //           <p>Minu Ilusalong - Sinu ilu ja enesetunde partner!</p>
    //         </div>

    //         <div>
    //           <Link className="text-white" href="mailto:example@gmail.com">
    //             <div className="flex items-center">
    //               <EnvelopeIcon className="w-6 h-6 mx-2 text-yellow-400" />
    //               <EnvelopeIcon className="w-6 h-6 mx-2 text-yellow-400" />
    //             </div>
    //           </Link>
    //         </div>
    //       </div>

    //       <div>
    //         <ul>
    //           <li>
    //             <Link className="text-white hover:text-white-500" href="/">
    //               Avaleht
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               className="text-white hover:text-white-500"
    //               href="/services"
    //             >
    //               Teenused
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               className="text-white hover:text-yellow-500"
    //               href="/booking"
    //             >
    //               Broneerimine
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="mb-4 md:mb-0">
    //         <ul>
    //           <li>
    //             <Link className="text-white hover:text-white-500" href="/faqs">
    //               FAQs
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               className="text-white hover:text-white-500"
    //               href="/privacy-policy"
    //             >
    //               Privaatsuspoliitika
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               className="text-white hover:text-white-500"
    //               href="/terms-conditions"
    //             >
    //               Kasutustingimused
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="flex flex-col justify-between">
    //         <div>
    //           <ul>
    //             <li className="flex items-center">
    //               <PhoneIcon className="w-4 h-4 mr-2 text-yellow-400" />
    //               <span>56962049</span>
    //             </li>
    //             <li className="flex items-center">
    //               <EnvelopeIcon className="w-4 h-4 mr-2 text-yellow-400" />
    //               <Link className="text-white" href="mailto:example@gmail.com">
    //                 vivianpraks@gmail.com
    //               </Link>
    //             </li>
    //             <li className="flex items-center">
    //               <MapPinIcon className="w-4 h-4 mr-2 text-yellow-400" />
    //               <span>Rohu 5, 2-korrus</span>
    //

    <footer class="bg-black text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-4 gap-4">
          <div class="flex flex-col">
            <div class="mb-4">
              <Image
                style={{ objectFit: "contain" }}
                src={logo}
                alt="Logo"
                class="h-20 w-50"
              />
            </div>

            <p class="mb-4">Minu Ilusalong - Sinu ilu ja enesetunde partner!</p>

            <div class="mb-2">
              <i class="fa-icon text-white text-2xl"></i>
            </div>
          </div>

          <div class="flex flex-col">
            <a href="#" class="mb-2">
              Avaleht
            </a>
            <a href="#" class="mb-2">
              Teenused
            </a>
            <a href="#" class="mb-2">
              Broneerimine
            </a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="mb-2">
              FAQs
            </a>
            <a href="#" class="mb-2">
              Privaatsuspoliitika
            </a>
            <a href="#" class="mb-2">
              Kasutustingimused
            </a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="mb-2 flex items-center">
              <PhoneIcon className="w-4 h-4 mr-2 text-yellow-400" />
              <span>56962049</span>
            </a>
            <a href="vivianpraks@gmail.com" class="mb-2 flex items-center">
              <EnvelopeIcon className="w-4 h-4 mr-2 text-yellow-400" />
              vivianpraks@gmail.com
            </a>
            <a href="#" class="mb-2 flex items-center">
              <MapPinIcon className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Rohu 5, 2-korrus</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
