import React from "react";

import { Title } from "../typography/Title";

import { Noveltie } from "./Noveltie";

import "./LastNovelties.scss";

export function LastNovelties() {
  return (
    <>
      <Title value="Titulo de bienvenida" />
      <section className="Last-novelties">
        <Noveltie />
        <Noveltie />
        <Noveltie />
        <Noveltie />
      </section>
    </>
  );
}
