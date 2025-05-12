import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="loader">
      <span className="loader-text">loading</span>
      <span className="load"></span>
    </div>
  );
}
