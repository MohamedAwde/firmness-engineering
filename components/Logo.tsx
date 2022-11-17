import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./../public/imgs/logo.webp";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image className="w-20" src={logo} alt="Akasha consturction" />
      </Link>
    </div>
  );
};

export default Logo;
