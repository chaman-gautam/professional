import { useState } from "react";
import axios from "axios";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(
        "http://localhost/backend/contact.php",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setStatus(res.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="w-full lg:w-[600px] flex flex-col p-6 bg-black rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Let's Connect</h2>

      {/* FORM - now using onSubmit */}
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Enter Your Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full m-2 px-4 py-2 rounded-lg border border-transparent focus:border-amber-500 outline-none bg-white/10 text-white placeholder-gray-300"
          required
        />

        <div className="w-full flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 px-4 m-2 py-2 rounded-lg border border-transparent focus:border-amber-500 outline-none bg-white/10 text-white placeholder-gray-300"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone no."
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 m-2 py-2 rounded-lg border border-transparent focus:border-amber-500 outline-none bg-white/10 text-white placeholder-gray-300"
          />
        </div>

        <textarea
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-2 m-2 py-2 rounded-lg border border-transparent focus:border-amber-500 outline-none bg-white/10 text-white placeholder-gray-300 h-32 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 m-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Status message */}
      {status && (
        <p className="text-center text-sm mt-3 text-gray-300">{status}</p>
      )}
    </div>
  );
}
