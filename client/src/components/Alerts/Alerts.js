import React, { useState } from "react";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";

export const AlertsNew = ({ title, buttonName, footer, type, text }) => {
  const [confirmation, setConfirmation] = useState(false);

  const handleClick = () => {
    Swal.fire({
      buttonName: buttonName,
      title: title,
      footer: footer,
      type: type,
      text: text,
    });
  };

  return (
    <div>
      <button class="btn btn-primary" onClick={handleClick}>
        {buttonName}
      </button>
    </div>
  );
};
