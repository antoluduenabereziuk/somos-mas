import React from "react";

import { Login } from "./Login/Login";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

const AppUI = () => {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export { AppUI };
