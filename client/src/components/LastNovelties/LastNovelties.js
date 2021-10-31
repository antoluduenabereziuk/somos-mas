import React from "react";

import { Title } from "../utils/typography/Title";

import "./LastNovelties.scss";

export function LastNovelties({ children }) {
  return (
    <>
      <Title value="Titulo de bienvenida" />
      <section className="Last-novelties">{children}</section>
    </>
  );
}
