import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactCard({ platform, username, link }) {
  // Map platform string to icon component
  const icons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
  };

  const IconComponent = icons[platform?.toLowerCase()] || null;

  return (
    <a
      href={link}
      className="flex items-center gap-3 p-2 border rounded-md shadow-sm w-[300px] h-[80px]"
    >
      <div>{IconComponent && <IconComponent size={28} />}</div>
      <div>
        <h2 className="font-semibold">{platform}</h2>
        <h2 className="text-gray-600">{username}</h2>
      </div>
    </a>
  );
}
