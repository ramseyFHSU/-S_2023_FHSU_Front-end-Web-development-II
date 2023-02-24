import React from "react";

export default function Task({ id, title, description }) {
  return (
    <div>
      {id}
      {title}-{description}
    </div>
  );
}
