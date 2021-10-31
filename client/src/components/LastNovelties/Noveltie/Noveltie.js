import React from "react";

import "./Noveltie.scss";

export function Noveltie({ title, img_url }) {
  return (
    <figure className="Noveltie">
      <img className="Noveltie__img" src={img_url} alt={title} />
      <div className="Noveltie--content">
        <h3>{title}</h3>
      </div>
    </figure>
  );
}
