import React from "react";

import { LastNovelties } from "../components/LastNovelties/LastNovelties";
import Slider from "../components/Slider/Slider";

export function Home() {
  return (
    <>
      <Slider />
      <LastNovelties />
    </>
  );
}
