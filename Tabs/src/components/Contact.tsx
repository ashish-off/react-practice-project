import { FaTwitter, FaYoutube, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Contact = () => {
  const links = [
    {
      href: "https://x.com/ashish_saud15",
      label: "X(Twitter)",
      icon: <FaX className="h-6 w-6" />,
    },
    {
      href: "https://www.youtube.com/",
      label: "YouTube",
      icon: <FaYoutube className="h-6 w-6 text-red-600" />,
    },
    {
      href: "https://github.com/ashish-off",
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6 text-gray-900" />,
    },
    {
      href: "https://www.instagram.com/aasis_s_/",
      label: "Instagram",
      icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
    },
    {
      href: "https://www.linkedin.com/in/ashish-saud-55ab57294",
      label: "Linkedin",
      icon: <FaLinkedin className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Me</h2>
      <div className="flex items-center ">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
          >
            {link.icon}
            <span className="text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;