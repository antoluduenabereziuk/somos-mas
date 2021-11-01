import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

export function Button({ title, className, url }) {
  return (
    <Link className={className} to={url}>
      {title}
    </Link>
  );
}
