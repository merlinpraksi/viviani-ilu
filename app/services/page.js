import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Depilatsioonid",
    description: "Minu depilatsiooniteenuste valik hõlmab erinevaid piirkondi, sealhulgas nägu, keha, käed, jalad ja bikiinipiirkond. Kasutan õrnu meetodeid, mis sobivad igat tüüpi nahale, et tagada kõrgeim turvalisus ja tulemuslikkus.",
    image: "/assets/waxing.jpg",

  },
  {
    id: 2,
    title: "Näohoolitsused",
    description: "Minu näohoolitsused on loodud selleks, et sulle pakkuda lõõgastavat ja tõhusat kogemust, mis parandab naha välimust ja jumet. Kasutan ainult kvaliteetseid nahahooldustooteid ja kaasaegseid tehnikaid, et tagada sulle parim tulemus.",
    image: "/assets/facial2.jpg",
  },

  {
    id: 3,
    title: "Pediküür",
    description: "Minu eesmärk on pakkuda sulle mitte ainult visuaalselt ilusaid jalgu, vaid ka tervemaid ja õnnelikumaid jalgu. Tule minu ilutuppa ja lase end hellitada minu professionaalse pediküüri teenusega, mis toob naeratuse suule ja mugavuse su sammudesse!",
    image: "/assets/pedicure2.jpg",
  },
  {
    id: 4,
    title: "Ripsmed/kulmud",
    description: "Minu ripsmete ja kulmude hooldusteenused on loodud selleks, et tõsta esile sinu silmade ilu ja anda näole kaunis raamistik. Meie kogenud spetsialistid kasutavad innovaatilisi meetodeid ja kvaliteetseid tooteid, et tagada sulle imeline ja loomulik tulemus.",
    image: "/assets/eyebrows2.jpg",
  },
  {
    id: 5,
    title: "Maniküür",
    description: "Minu maniküüriteenused on loodud selleks, et sinu käed ja küüned oleksid hooldatud, kaunid ja elegantse välimusega.",
    image: "/assets/manicure2.jpg",
  },
];

const ServicesPage = () => {
  return (

      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Teenused</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} passHref className="border rounded-lg p-4">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p>{service.description}</p>
</Link>
          ))}
        </div>
      </div>

  );
};

export default ServicesPage;
