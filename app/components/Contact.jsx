"use client";
import { useState } from "react";
import axios from "axios";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/send-email", formData);
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <div className="flex items-start justify-between py-8">
      <div className="max-w-3xl mx-auto flex space-x-8">
        <div className="w-1/2 pr-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 mx-left bg-yellow-400"></div>
          <p className="mb-4 mt-8">
            Oleme alati valmis Sind aitama ja vastama kõigile Sinu küsimustele!
            Võta meiega ühendust järgnevate kontaktandmete kaudu:
          </p>
          <div className="flex items-start space-x-2 mb-4">
            <PhoneIcon className="h-5 w-5 text-black" />
            <span>56962049</span>
          </div>
          <div className="flex items-start space-x-2 mb-4">
            <MapPinIcon className="h-5 w-5 text-black" />
            <span>Rohu 5, 2-korrus</span>
          </div>
          <div className="flex items-start space-x-2 mb-4">
            <EnvelopeIcon className="h-5 w-5 text-black" />
            <span>vivianpraks@gmail.com</span>
          </div>
        </div>
        <div className="w-1/2 pl-8 border-l-2 flex items-end">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-full">
                <label htmlFor="name">Nimi</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="subject">Pealkiri</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message">Sõnum</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                style={{ marginTop: "0.5rem", marginBottom: "1rem" }}
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-600 text-black hover:text-white py-2 px-6 rounded-full text-lg font-semibold shadow-lg transition-colors mr-4"
            >
              Saada Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
