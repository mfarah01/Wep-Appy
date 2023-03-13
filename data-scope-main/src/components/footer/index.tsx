import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 flex flex-col justify-center items-center">
      <small className="py-3">
        &copy; Copyright {year}, Datascope Analytics
      </small>
      <small>
        Built and designed by{" "}
        <a
          href="https://momito.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          Momito
        </a>
      </small>
    </footer>
  );
};

export default Footer;
