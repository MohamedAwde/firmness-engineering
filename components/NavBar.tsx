import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./../public/imgs/logo.webp";
import NavLink from "./NavLink";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <nav className="border-b border-gray-200">
      <div className="md:flex hidden  justify-between px-16 p-4">
        <div>
          <Link href="/">
            <Image className="" src={logo} alt="Akasha consturction" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li>
              <NavLink
                className="p-2 hover:text-orange-500 mx-1"
                activeClassName="text-orange-500"
                href="/"
              >
                الرئيسية
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="text-orange-500"
                className="p-2 hover:text-orange-500 mx-1 "
                href="/services"
              >
                خدماتنا
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="text-orange-500"
                className="p-2 hover:text-orange-500 mx-1 "
                href="/team"
              >
                فريق العمل
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="text-orange-500"
                className="p-2 hover:text-orange-500 mx-1 "
                href="/contact"
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="sm:hidden flex items-center p-2">
        {showNavBar ? (
          <ul>
            <li>
              <button
                className="p-4"
                onClick={() => setShowNavBar(!showNavBar)}
              >
                X
              </button>
            </li>
            <li>
              <NavLink
                activeClassName="text-orange-500"
                onClick={() => setShowNavBar(!showNavBar)}
                className=" hover:text-orange-500 p-2 block"
                href="/"
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="text-orange-500"
                onClick={() => setShowNavBar(!showNavBar)}
                className=" hover:text-orange-500 p-2  block"
                href="/services"
              >
                خدماتنا
              </NavLink>
            </li>
            <li>
              <Link
                onClick={() => setShowNavBar(!showNavBar)}
                className=" hover:text-orange-500 p-2  block"
                href="/contact"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <div className="flex-1">
              <Link href="/">
                <Image className="w-1/2" src={logo} alt="Akasha consturction" />
              </Link>
            </div>
            <div>
              <button
                onClick={() => setShowNavBar(!showNavBar)}
                className="border border-white p-4 rounded-sm hover:text-[#F97316] duration-500 focus:border-[#F97316] focus:text-[#F97316]"
              >
                <li className="fa fa-bars" />
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
