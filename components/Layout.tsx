import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
