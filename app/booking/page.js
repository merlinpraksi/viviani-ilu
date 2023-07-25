import React from 'react';
import appointment from '../../public/assets/appointment.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-104">
        <Image
          src={appointment}
          alt="Appointment Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mt-6 mb-8">
        Broneerimine
      </h1>
      <p></p>
      <Link href="https://dikidi.net/1165290">
        <button
          className="bg-yellow-400 hover:bg-yellow-600 text-black hover:text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-colors"
        >
          Broneeri
        </button>
      </Link>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8396.133413987684!2d22.475893231955794!3d58.25784568753304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46f26cfd6e2d4fad%3A0x19a007afc74d2fb8!2sRohu%205%2C%20Kuressaare%2C%2093819%20Saare%20maakond%2C%20Estonia!5e0!3m2!1sen!2ses!4v1689338359989!5m2!1sen!2ses"
          width="100%" // Set width to 100% for responsiveness
          height="450" // Adjust the height as needed for a wider map view
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col items-center mt-4 sm:flex-row sm:items-center">
        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <p className="ml-2 mt-2 text-lg font-semibold">Salon Location</p>
      </div>
    </div>
  );
};

export default Page;
