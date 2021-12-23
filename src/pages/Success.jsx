import React from "react";
import { useLocation } from "react-router-dom";

export const Success = () => {
  const location = useLocation();

  return <div>Great Success!</div>;
};
