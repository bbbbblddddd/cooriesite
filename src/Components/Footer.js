import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 mt-auto">
      <div className="flex flex-col items-center">
        <img
          src="/images/COORIEsmall2.png"
          alt="Coorie Logo"
          className="mb-4"
          style={{ maxWidth: "200px" }}
        />
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/coorieproject/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-700 hover:text-gray-900"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/channel/UCULPVxk5Zjk2zje5drAou_Q?app=desktop&disable_polymer=true"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-700 hover:text-gray-900"
          >
            YouTube
          </a>
          <a
            href="mailto:coorieproject@gmail.com"
            className="mx-2 text-gray-700 hover:text-gray-900"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
