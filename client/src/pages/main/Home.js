import React from "react";

import Slider from "../../components/Slider/Slider";
import { LastNovelties } from "../../components/LastNovelties/LastNovelties";
import { Noveltie } from "../../components/LastNovelties/Noveltie/Noveltie";
import { Button } from "../../components/utils/buttons/Button";

export const Home = () => {
  const novelties = [
    {
      title: "Novedad 1",
      img_url: "https://picsum.photos/400/300",
    },
    {
      title: "Novedad 2",
      img_url: "https://picsum.photos/400/300",
    },
    {
      title: "Novedad 3",
      img_url: "https://picsum.photos/400/300",
    },
    {
      title: "Novedad 4",
      img_url: "https://picsum.photos/400/300",
    },
  ];

  return (
    <>
      <Slider />

      <section>
        <LastNovelties>
          {novelties.map((noveltie, index) => (
            <Noveltie
              key={index}
              title={noveltie.title}
              img_url={noveltie.img_url}
            />
          ))}
        </LastNovelties>
      </section>
      <Button className="btn primary center" title="Ver más" />
    </>
  );
};
