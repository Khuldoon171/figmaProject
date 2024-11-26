import { Heebo } from "next/font/google";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="bg-footerBackground space-y-6 flex flex-col items-center justify-center h-[243px]">
      <div className="flex space-x-5">
        <Link href={""}>
          <FaFacebookSquare className="hover:w-[50px] hover:h-[50px] duration-300 w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaInstagram className="hover:w-[50px] hover:h-[50px] duration-300 w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaTwitter className="hover:w-[50px] hover:h-[50px] duration-300 w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaLinkedin className="hover:w-[50px] hover:h-[50px] duration-300 w-[30px] h-[30px]" />
        </Link>
      </div>
      <p className={`${heebo.className} text-center font-medium text-[22px]`}>
        Copyright ©2020 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
