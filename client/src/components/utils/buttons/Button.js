import React from "react";

import "./Button.scss";

export function Button({ title, className }) {
  return <button className={className}>{title}</button>;
}
