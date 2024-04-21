import React from "react";
import { FaLinkedin } from "react-icons/fa";
//import { BiLogoGmail } from 'react-icons/Bi'
const Footer = () => {
  return (
    <div>
      <footer className="bg-red-400 font-[Poppins]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-around">
            <div className="grid md:grid-cols-4  justify-center  gap-8 sm:gap-6 sm:grid-cols-2">
              <div className=" mb-6 md:mb-0">
                <a
                  href="`"
                  className=" smm:ml-[7rem] flex justify-center items-center"
                >
                  <span className=" text-center text-2xl font-bold whitespace-nowrap font-[system-ui] text-white">
                    SHE SHARE
                  </span>
                </a>
                <ul className="text-white font-medium">
                  <li className="mb-4 text-center mt-4">
                    <a href="/contact" className="hover:underline ">
                      About us
                    </a>
                  </li>
                  <li className=" text-center mb-4">
                    <a href="/home#about-us" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className=" text-center mb-4">
                    <a href="/job" className="hover:underline">
                      Contact{" "}
                    </a>
                  </li>
                  <li className="text-center mb-4 ">
                    <a href="/job" className="hover:underline relative">
                      Follow us:{" "}
                      <span className="absolute  ml-2 mt-1">
                        {" "}
                        <FaLinkedin />
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="  mb-6 md:mb-0">
                <a
                  href="`"
                  className=" smm:ml-[7rem] flex justify-center items-center"
                >
                  <span className="mb-1 text-xl font-bold  uppercase text-center text-white">
                    SUPPORT
                  </span>
                </a>
                <ul className="text-white font-medium">
                  <li className=" text-center mb-4 mt-4">
                    <a href="/contact" className=" hover:underline ">
                      FAQ's
                    </a>
                  </li>
                  <li className=" text-center mb-4">
                    <a href="/home#about-us" className="hover:underline">
                      Cancelation Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-5 text-xl font-bold  uppercase text-center text-white">
                  BECOME A HOST{" "}
                </h2>
                <ul className="text-white font-medium">
                  <li className="text-center mb-4">
                    <a href="" className="hover:underline">
                      Hosting Resources
                    </a>
                  </li>
                  <li className="mb-4 text-center">
                    <a href="" className="hover:underline">
                      Hoisting Responsibility
                    </a>
                  </li>
                  <li className="mb-4 text-center">
                    <a href="" className="hover:underline">
                      Share a Room
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="" className="hover:underline">
                      Pets
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-5 text-xl font-bold  uppercase text-center text-white">
                  TERMS &PRIVACY{" "}
                </h2>
                <ul className="text-white font-medium">
                  <li className="text-center mb-4">
                    <a href="" className="hover:underline">
                      Terms & Condition
                    </a>
                  </li>
                  <li className="mb-4 text-center">
                    <a href="" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
